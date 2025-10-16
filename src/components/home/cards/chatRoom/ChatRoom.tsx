import React from "react";
import style from './ChatRoom.module.css'

export const ChatRoom = () => {
  return (
    <article className={style.chat}>
      <div className={style.chatWrapper}>
        <div className={style.chatContainer}>
          <div className={style.chatBox}>
            <div className={style.chatHeader}>
              <div className={style.headerInfo}>
                <div className={style.avatarContainer}>
                  <img
                    alt="Event"
                    className={style.eventAvatar}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM8jLwRv7IKAPVzvUn0UGUUi_umjnxIfwNLCEOCNUvtfjB0A-TOcIZXyQrBTF1tCqQEH7w8udkbupSRvJOmhpXitrzJEGR7R4VyG3uXkm-ipLnwm4HL16Ap8kjeRCOHZDTIlP7_6YRitedgmZOKiAInXiGSrTefO2WJk4No3JoZ6OL4bBAA2l7aECHhvV6xYi4B2Qt-UGjzeGAoi9O4mUIJu3qSP67Nb3F9epbYieNp6r71YzvGLo_d_8K8-iOl5xY_7VZJ9cQ"
                  />
                  <span className={style.statusIndicator}></span>
                </div>
                <div>
                  <h3 className={style.chatTitle}>Starlight Fest Attendees</h3>
                  <p className={style.chatSubtitle}>238 members, 42 online</p>
                </div>
              </div>
              <div className={style.headerActions}>
                <button className={style.menuButton}>
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>

            <div className={style.messagesContainer}>
              <div className={style.messageWrapper}>
                <img
                  alt="User Avatar"
                  className={style.userAvatar}
                  src="public\icons\user_woman_icon.png"
                />
                <div>
                  <div className={`${style.message} ${style.messageOther}`}>
                    <p className={style.messageText}>
                      Anyone else super hyped for the headliner?! Can't wait!
                    </p>
                  </div>
                  <p className={style.messageTime}>Sarah J. - 2:30 PM</p>
                </div>
              </div>

              <div className={`${style.messageWrapper} ${style.messageOwn}`}>
                <div>
                  <div className={`${style.message} ${style.messagePrimary}`}>
                    <p className={style.messageText}>
                      Totally! I'm planning to get there early to grab a good
                      spot. Who wants to meet up?
                    </p>
                  </div>
                  <p
                    className={`${style.messageTime} ${style.messageTimeRight}`}
                  >
                    You - 2:31 PM
                  </p>
                </div>
                <img
                  alt="User Avatar"
                  className={style.userAvatar}
                  src="public\icons\user_man_icon.png"
                />
              </div>

              <div className={style.messageWrapper}>
                <div className={style.botAvatar}>
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div>
                  <div className={`${style.message} ${style.messageBot}`}>
                    <p className={style.messageText}>
                      <span className={style.botName}>Tickly Bot:</span> Just a
                      reminder, doors open at 6 PM. Check the 'Event Info' tab
                      for the full schedule and venue map!
                    </p>
                  </div>
                  <p className={style.messageTime}>Bot - 2:32 PM</p>
                </div>
              </div>
            </div>

            <div className={style.chatInputContainer}>
              <div className={style.inputWrapper}>
                <input
                  className={style.chatInput}
                  placeholder="Type your message..."
                  type="text"
                />
                <button className={style.sendButton}>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
