import React from "react";
import style from "./AIFeature.module.css";
import Ticket from "../ticket/Ticket";
import { HorizontalEventCard } from "../horizontalEventCard/HorizontalEventCard";

export const AIFeature = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.title}>
          Tickly <span className={style.aiSpan}>AI</span> - Find your event with
          AI
        </h1>
        <p className={style.info}>
          Let our AI be guide to unforgettable experiences. <br />
          Describe what you're looking for and we'll find the perfect match.
        </p>
      </header>
      <main className={style.content}>
        <aside className={style.ticketContainer}>
          <Ticket />
        </aside>
        <section className={style.cardsContainer}>
          <HorizontalEventCard
            urlImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCMP3pM0ivynvq0O8SSIlw7J3a_4EvTJRve1rMsx8qlSueLcK_7RP-FV7hlqqHMxCtIekLlmHuy-jVlXqV1KJxRX1N7SVlu9jf-2QSEfT9X4-f0nC5vfqRwJoYEbaDhjoTfLLcLEG3U1g48-G04zCJbRYMoUdyCIjEXXRBf72lzeVDbG_ZWVBzdrkfxGWaoS3XU5gbcUCyTtohsqqfQOrSBB525VLWub3j_hyPRzRxpZGPZdzziVO57CYbBubdD-vfoL2WehNB5Fg"
            title="Techno Night"
            place="Miami, FL"
            date="Oct 26, 2025 - 10:00pm"
            aditionalInf="Limited Tickets"
            color="red"
            backgroundColor="rgba(235, 173, 173, 1)"
            price="$100"
          />
          <HorizontalEventCard
            urlImg="https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM8jLwRv7IKAPVzvUn0UGUUi_umjnxIfwNLCEOCNUvtfjB0A-TOcIZXyQrBTF1tCqQEH7w8udkbupSRvJOmhpXitrzJEGR7R4VyG3uXkm-ipLnwm4HL16Ap8kjeRCOHZDTIlP7_6YRitedgmZOKiAInXiGSrTefO2WJk4No3JoZ6OL4bBAA2l7aECHhvV6xYi4B2Qt-UGjzeGAoi9O4mUIJu3qSP67Nb3F9epbYieNp6r71YzvGLo_d_8K8-iOl5xY_7VZJ9cQ"
            title="Open Mic Night"
            place="Nashvile, TN"
            date="Oct 29, 2025 - 7:00pm"
            aditionalInf="New Open"
            color="green"
            backgroundColor="rgba(162, 230, 173, 1)"
            price="Free"
          />
          <HorizontalEventCard />
        </section>
      </main>
    </div>
  );
};
