import React from "react";
import styles from "./EventsExplorer.module.css";
import { EventSearchBar } from "../eventSearchBar/EventSearchBar";
import { EventCard } from "../eventCard/EventCard";
import { EventModal } from "../eventModal/EventModal";
import { useState } from "react";
import "../../../App.css";
import { useEvents } from "../../../hooks/useEvents";

export const EventsExplorer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [ticketPricing, setTicketPricing] = useState<any>(null); 

  const { events, loading, error, searchEvents } = useEvents();

  const handleSearch = async (description: string) => {
    await searchEvents(description);
  };

  const calculateTicketPrices = (eventCost: number) => {
    const baseCost = typeof eventCost === 'number' ? eventCost : 0;
    
    const generalPrice = baseCost === 0 ? 0 : baseCost;
    const vipPrice = baseCost + 50;
    const fees = baseCost === 0 ? 1.0 : 5.5;

    return {
      general: {
        name: "General Admission",
        description: "Standard entry to the event.",
        price: generalPrice,
        isFree: baseCost === 0,
      },
      vip: {
        name: "VIP Pass",
        description: "Includes front row access and a free drink.",
        price: vipPrice,
        isFree: false,
      },
      fees: fees,
    };
  };

  const handleViewDetails = (event: any) => {
    const pricing = calculateTicketPrices(Number(event.cost) || 0); 
    setTicketPricing(pricing); 
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <main className={styles.mainContainer}>
      {selectedEvent && ticketPricing && (
        <EventModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEvent(null);
            setTicketPricing(null); 
          }}
          event={{
            eventId: selectedEvent.eventId,
            title: selectedEvent.title,
            place: selectedEvent.place,
            date: selectedEvent.dateTime || selectedEvent.date,
            image: selectedEvent.imageUrl || selectedEvent.urlImage,
            rawDate: selectedEvent.date,
            rawTime: selectedEvent.time,
          }}
          tickets={{
            general: ticketPricing.general,
            vip: ticketPricing.vip,
          }}
          fees={ticketPricing.fees}
        />
      )}
      
      <section className={styles.eventsBrowser}>
        <h1 className={`title ${styles.floatUp}`}>Your Next Event Awaits</h1>
        <p
          className={`subtitle ${styles.floatUp} ${styles.stagger1} ${styles.subtitleEvents}`}
        >
          Discover personalized events with the power of AI.
        </p>
        <EventSearchBar
          placeHolder="Tell us what you´re looking for e.g. 'Rock concerts in LA this weekend'"
          textButton="Find Events"
          animation={true}
          onSearch={handleSearch}
        />
      </section>

      <section className={styles.eventsContainer}>
        {loading && (
          <div className={styles.loadingContainer}>
            <p>Our powerful system is searching for events for you, please wait a moment...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <p>Error: {error.message}</p>
          </div>
        )}

        {!loading && !error && events && events.length === 0 && (
          <div className={styles.emptyContainer}>
            <p>No events found. Try a different search.</p>
          </div>
        )}

        {!loading && !error && events && events.length > 0 && (
          <>
            {events.slice(0, 8).map((event, index) => {
              const staggerClass =
                index < 4 ? styles[`stagger${index + 1}`] : styles.stagger4;
              return (
                <div
                  key={event.eventId}
                  className={`${styles.floatUp} ${staggerClass}`}
                >
                  <EventCard
                    urlImage={event.imageUrl}
                    title={event.title}
                    place={event.place}
                    date={event.dateTime}
                    onViewDetails={() => handleViewDetails(event)}
                  />
                </div>
              );
            })}
          </>
        )}

        {!loading && !error && !events && (
          <>
            <div className={`${styles.floatUp} ${styles.stagger1}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
                title="Indie Music Festival"
                place="Brooklyn, NY"
                date={{
                  year: 2025,
                  month: "JUL",
                  day: 13,
                  hour: 8,
                  minute: 30,
                }}
                onViewDetails={() => handleViewDetails({
                  eventId: "demo-1",
                  title: "Indie Music Festival",
                  place: "Brooklyn, NY",
                  dateTime: {
                    year: 2025,
                    month: "JUL",
                    day: 13,
                    hour: 8,
                    minute: 30,
                  },
                  date: "2025-07-13",
                  time: "20:00",
                  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A",
                  cost: 45.0,
                })}
              />
            </div>
            <div className={`${styles.floatUp} ${styles.stagger2}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCMP3pM0ivynvq0O8SSIlw7J3a_4EvTJRve1rMsx8qlSueLcK_7RP-FV7hlqqHMxCtIekLlmHuy-jVlXqV1KJxRX1N7SVlu9jf-2QSEfT9X4-f0nC5vfqRwJoYEbaDhjoTfLLcLEG3U1g48-G04zCJbRYMoUdyCIjEXXRBf72lzeVDbG_ZWVBzdrkfxGWaoS3XU5gbcUCyTtohsqqfQOrSBB525VLWub3j_hyPRzRxpZGPZdzziVO57CYbBubdD-vfoL2WehNB5Fg"
                title="DJ Snake Live"
                place="Miami, FL"
                date={{
                  year: 2025,
                  month: "FEB",
                  day: 22,
                  hour: 8,
                  minute: 30,
                }}
                onViewDetails={() => handleViewDetails({
                  eventId: "demo-2",
                  title: "DJ Snake Live",
                  place: "Miami, FL",
                  dateTime: {
                    year: 2025,
                    month: "FEB",
                    day: 22,
                    hour: 8,
                    minute: 30,
                  },
                  date: "2025-02-22",
                  time: "20:30",
                  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMP3pM0ivynvq0O8SSIlw7J3a_4EvTJRve1rMsx8qlSueLcK_7RP-FV7hlqqHMxCtIekLlmHuy-jVlXqV1KJxRX1N7SVlu9jf-2QSEfT9X4-f0nC5vfqRwJoYEbaDhjoTfLLcLEG3U1g48-G04zCJbRYMoUdyCIjEXXRBf72lzeVDbG_ZWVBzdrkfxGWaoS3XU5gbcUCyTtohsqqfQOrSBB525VLWub3j_hyPRzRxpZGPZdzziVO57CYbBubdD-vfoL2WehNB5Fg",
                  cost: 0,
                })}
              />
            </div>
            <div className={`${styles.floatUp} ${styles.stagger3}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBchq9iFwmJikuaA1sOpmESMUi7L-jxbWQaAOqSCaG-Ipu7B2u26XdM4LfFOv7B0_gr9o31WPj3qLfB5kq2gh3UiF-wUi7WKCMBy7xg5aZMzufHRTqTAfSFT8z6ZTu9OZ2eMX-Hd20y78e38d3HTmH5bBtJC5pvMMla0MoU3EOKS7uhdpREiNtwr7XecIaAZESVgY8J10CbcktU09OH5A_Jhl5jXPIp5LhWTSGXHLNSHsiDxiyrpb-QHll1ojsXoIKw4sZ1szdDFA"
                title="Electronic Dance Mania"
                place="Las Vegas, NV"
                date={{
                  year: 2025,
                  month: "OCT",
                  day: 8,
                  hour: 8,
                  minute: 30,
                }}
                onViewDetails={() => handleViewDetails({
                  eventId: "demo-3",
                  title: "Electronic Dance Mania",
                  place: "Las Vegas, NV",
                  dateTime: {
                    year: 2025,
                    month: "OCT",
                    day: 8,
                    hour: 8,
                    minute: 30,
                  },
                  date: "2025-10-08",
                  time: "20:30",
                  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBchq9iFwmJikuaA1sOpmESMUi7L-jxbWQaAOqSCaG-Ipu7B2u26XdM4LfFOv7B0_gr9o31WPj3qLfB5kq2gh3UiF-wUi7WKCMBy7xg5aZMzufHRTqTAfSFT8z6ZTu9OZ2eMX-Hd20y78e38d3HTmH5bBtJC5pvMMla0MoU3EOKS7uhdpREiNtwr7XecIaAZESVgY8J10CbcktU09OH5A_Jhl5jXPIp5LhWTSGXHLNSHsiDxiyrpb-QHll1ojsXoIKw4sZ1szdDFA",
                  cost: 75.0,
                })}
              />
            </div>
            <div className={`${styles.floatUp} ${styles.stagger4}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDdmgcJUuMCmycODmqbH59Hc-k9RpipvEQu4LfgpSqE-OZy-BgGdaLil6vI5W7zEh_FrSrMYNyN4oeK_zzj5jATmmOm84A-35jfXeCY4t6zByfGkjSfKWXTRPi7ZWbxh7gj-feb4vbCTFOND2aAdG3Z7Z4GqB2ejwluPwIjUPaxdg_gc-v5au7FLwSt-VvQ6t2lXHQymLf5DJRI_aqpvsttwX_QXrnFnnm5ZvU87Z4_RBreurtrDTuQVxFgK2So0lxbnkhIjAR3rg"
                title="Jazz Nights"
                place="New Orleans, LA"
                date={{
                  year: 2025,
                  month: "DEC",
                  day: 17,
                  hour: 8,
                  minute: 30,
                }}
                onViewDetails={() => handleViewDetails({
                  eventId: "demo-4",
                  title: "Jazz Nights",
                  place: "New Orleans, LA",
                  dateTime: {
                    year: 2025,
                    month: "DEC",
                    day: 17,
                    hour: 8,
                    minute: 30,
                  },
                  date: "2025-12-17",
                  time: "20:30",
                  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdmgcJUuMCmycODmqbH59Hc-k9RpipvEQu4LfgpSqE-OZy-BgGdaLil6vI5W7zEh_FrSrMYNyN4oeK_zzj5jATmmOm84A-35jfXeCY4t6zByfGkjSfKWXTRPi7ZWbxh7gj-feb4vbCTFOND2aAdG3Z7Z4GqB2ejwluPwIjUPaxdg_gc-v5au7FLwSt-VvQ6t2lXHQymLf5DJRI_aqpvsttwX_QXrnFnnm5ZvU87Z4_RBreurtrDTuQVxFgK2So0lxbnkhIjAR3rg",
                  cost: 30.0,
                })}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
};