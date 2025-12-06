import { useEffect, useState } from "react";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import Footer from "../../components/common/navigation/footer/Footer";
import { SEO } from "@/components/common/seo/SEO";
import { MyChatsContent } from "@/components/social/myChatsContent/MyChatsContent";
import { useAuth } from "@/contexts/AuthContext";
import { useTickets } from "@/hooks/useTickets";
import type { ChatRoom } from "@/components/social/myChatsContent/MyChatsContent";

export const MyChats = () => {
  const { user, loading: authLoading } = useAuth();
  const { tickets, loading: ticketsLoading } = useTickets(user?.id || null);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (tickets && tickets.length > 0) {
      const rooms: ChatRoom[] = tickets.map((ticket) => ({
        id: ticket.eventId, 
        eventName: ticket.eventName,
        eventImage: ticket.imageUrl,
        lastMessage: 'No messages yet',
        lastMessageTime: 'Now',
        unreadCount: 0,
        isActive: true,
        memberCount: 0,
        onlineCount: 0,
        isArchived: false,
      }));

      setChatRooms(rooms);
    }
  }, [tickets]);

  if (authLoading || ticketsLoading) {
    return (
      <>
        <SEO
          title="My Chats"
          description="Connect with other attendees and discuss your upcoming events."
          keywords="chat rooms, event chat, tickly chat, messaging, event community"
        />
        <SmartNavBar activePage="my-chats" />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '70vh',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div className="loading-spinner" />
          <p>Loading your chats...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <SEO
          title="My Chats"
          description="Connect with other attendees and discuss your upcoming events."
          keywords="chat rooms, event chat, tickly chat, messaging, event community"
        />
        <SmartNavBar activePage="my-chats" />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '70vh',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#7f13ec' }}>
            lock
          </span>
          <p>Please log in to view your chats</p>
        </div>
        <Footer />
      </>
    );
  }

  if (chatRooms.length === 0) {
    return (
      <>
        <SEO
          title="My Chats"
          description="Connect with other attendees and discuss your upcoming events."
          keywords="chat rooms, event chat, tickly chat, messaging, event community"
        />
        <SmartNavBar activePage="my-chats" />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '70vh',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#7f13ec' }}>
            event_busy
          </span>
          <p>You don't have any tickets yet</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Purchase tickets to join event chats
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="My Chats"
        description="Connect with other attendees and discuss your upcoming events."
        keywords="chat rooms, event chat, tickly chat, messaging, event community"
      />
      <SmartNavBar activePage="my-chats" />
      <MyChatsContent
        currentUserId={user.id}
        currentUserName={user.user_metadata?.full_name || user.email || 'User'}
        currentUserAvatar={
          user.user_metadata?.avatar_url || 
          user.user_metadata?.picture || 
          'https://via.placeholder.com/40'
        }
        initialChatRooms={chatRooms}
      />
      <Footer />
    </>
  );
};