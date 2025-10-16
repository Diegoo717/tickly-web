import React from "react";
import styles from "./Hero.module.css";
import { Button } from "../../../common/buttons/Button";
import { CarouselCard } from "../../cards/carouselCard/CarouselCard";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <main className={styles.content}>
        <h1 className={styles.title}>
          Discover Your Next Unforgettable <br />
          Experience
        </h1>
        <div className={styles.inputWrapper}>
          <img src="public\icons\search_icon.png" alt="Search Icon" />
          <input
            className={styles.inputSearch}
            placeholder="e.g., 'Rock concerts in New York this weekend'"
            type="text"
          />
          <Button text="Find Events" active={true} />
        </div>
      </main>
      <section className={styles.carousel}>
        <div className={styles.carouselContent}>
          <div className={styles.carouselGroup}>
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
              title="Indie Music Festival"
              place="Brooklyn, NY"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCMP3pM0ivynvq0O8SSIlw7J3a_4EvTJRve1rMsx8qlSueLcK_7RP-FV7hlqqHMxCtIekLlmHuy-jVlXqV1KJxRX1N7SVlu9jf-2QSEfT9X4-f0nC5vfqRwJoYEbaDhjoTfLLcLEG3U1g48-G04zCJbRYMoUdyCIjEXXRBf72lzeVDbG_ZWVBzdrkfxGWaoS3XU5gbcUCyTtohsqqfQOrSBB525VLWub3j_hyPRzRxpZGPZdzziVO57CYbBubdD-vfoL2WehNB5Fg"
              title="DJ Snake Live"
              place="Miami, FL"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzumrYf-9gzsqzwUiIvqgIIO6eoqEglB11fMZMTSRjseNSr0z5U5cuCdKx2OTNAwewm3v41ESNH1EWK-vEhz2gc30_cL6faTVgFgvmDR8fF8eMI5kwJUxnLhm6LkHwCXm7nZI8pYHGjzF5xapP180SNRlXGNW25MMiuAxH5lWFAYgfLILIJsPVp3EAg2iV_fyy-JPzCDvEEt_UFBjoaiLNRQNoqmJkrJ_7ZIsqP3yGUyV1ggoqRWmUX56i_WJiXyY11n-9L06AUg"
              title="The Grand Symphony"
              place="Chicago, IL"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCeodGiGcGNb53WLjMTY8jxGZ9S5l6mpxGeMg86IAsXZxF-dYWXneIupXmMUwvzqEjVoz8Ey1xFFVSJUy-HEfyrzG-hU5KP61zTvJj7kVuJj059qDf7yCtiXgx9EgbiVbP68HvoaNQvYyoe1yHnBGr--65F_6-5IjqeOp-N1Jo3cqHAip-DA-JH_W-jxjoYJ5ZOLpCoWjMPPpAlg2IYjENdahw3TzS8UOSzzHKxkHVvTCpaktjlEpux49rt3pHv2Gs95BY56EVbnQ"
              title="Summer Rock Fest"
              place="Austin, TX"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDdmgcJUuMCmycODmqbH59Hc-k9RpipvEQu4LfgpSqE-OZy-BgGdaLil6vI5W7zEh_FrSrMYNyN4oeK_zzj5jATmmOm84A-35jfXeCY4t6zByfGkjSfKWXTRPi7ZWbxh7gj-feb4vbCTFOND2aAdG3Z7Z4GqB2ejwluPwIjUPaxdg_gc-v5au7FLwSt-VvQ6t2lXHQymLf5DJRI_aqpvsttwX_QXrnFnnm5ZvU87Z4_RBreurtrDTuQVxFgK2So0lxbnkhIjAR3rg"
              title="Jazz Nights"
              place="New Orleans, LA"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBchq9iFwmJikuaA1sOpmESMUi7L-jxbWQaAOqSCaG-Ipu7B2u26XdM4LfFOv7B0_gr9o31WPj3qLfB5kq2gh3UiF-wUi7WKCMBy7xg5aZMzufHRTqTAfSFT8z6ZTu9OZ2eMX-Hd20y78e38d3HTmH5bBtJC5pvMMla0MoU3EOKS7uhdpREiNtwr7XecIaAZESVgY8J10CbcktU09OH5A_Jhl5jXPIp5LhWTSGXHLNSHsiDxiyrpb-QHll1ojsXoIKw4sZ1szdDFA"
              title="Electronic Dance Mania"
              place="Las Vegas, NV"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM8jLwRv7IKAPVzvUn0UGUUi_umjnxIfwNLCEOCNUvtfjB0A-TOcIZXyQrBTF1tCqQEH7w8udkbupSRvJOmhpXitrzJEGR7R4VyG3uXkm-ipLnwm4HL16Ap8kjeRCOHZDTIlP7_6YRitedgmZOKiAInXiGSrTefO2WJk4No3JoZ6OL4bBAA2l7aECHhvV6xYi4B2Qt-UGjzeGAoi9O4mUIJu3qSP67Nb3F9epbYieNp6r71YzvGLo_d_8K8-iOl5xY_7VZJ9cQ"
              title="Acoustic Sessions"
              place="Nashville, TN"
            />
          </div>
          <div className={styles.carouselGroup} aria-hidden="true">
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
              title="Indie Music Festival"
              place="Brooklyn, NY"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCMP3pM0ivynvq0O8SSIlw7J3a_4EvTJRve1rMsx8qlSueLcK_7RP-FV7hlqqHMxCtIekLlmHuy-jVlXqV1KJxRX1N7SVlu9jf-2QSEfT9X4-f0nC5vfqRwJoYEbaDhjoTfLLcLEG3U1g48-G04zCJbRYMoUdyCIjEXXRBf72lzeVDbG_ZWVBzdrkfxGWaoS3XU5gbcUCyTtohsqqfQOrSBB525VLWub3j_hyPRzRxpZGPZdzziVO57CYbBubdD-vfoL2WehNB5Fg"
              title="DJ Snake Live"
              place="Miami, FL"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzumrYf-9gzsqzwUiIvqgIIO6eoqEglB11fMZMTSRjseNSr0z5U5cuCdKx2OTNAwewm3v41ESNH1EWK-vEhz2gc30_cL6faTVgFgvmDR8fF8eMI5kwJUxnLhm6LkHwCXm7nZI8pYHGjzF5xapP180SNRlXGNW25MMiuAxH5lWFAYgfLILIJsPVp3EAg2iV_fyy-JPzCDvEEt_UFBjoaiLNRQNoqmJkrJ_7ZIsqP3yGUyV1ggoqRWmUX56i_WJiXyY11n-9L06AUg"
              title="The Grand Symphony"
              place="Chicago, IL"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCeodGiGcGNb53WLjMTY8jxGZ9S5l6mpxGeMg86IAsXZxF-dYWXneIupXmMUwvzqEjVoz8Ey1xFFVSJUy-HEfyrzG-hU5KP61zTvJj7kVuJj059qDf7yCtiXgx9EgbiVbP68HvoaNQvYyoe1yHnBGr--65F_6-5IjqeOp-N1Jo3cqHAip-DA-JH_W-jxjoYJ5ZOLpCoWjMPPpAlg2IYjENdahw3TzS8UOSzzHKxkHVvTCpaktjlEpux49rt3pHv2Gs95BY56EVbnQ"
              title="Summer Rock Fest"
              place="Austin, TX"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDdmgcJUuMCmycODmqbH59Hc-k9RpipvEQu4LfgpSqE-OZy-BgGdaLil6vI5W7zEh_FrSrMYNyN4oeK_zzj5jATmmOm84A-35jfXeCY4t6zByfGkjSfKWXTRPi7ZWbxh7gj-feb4vbCTFOND2aAdG3Z7Z4GqB2ejwluPwIjUPaxdg_gc-v5au7FLwSt-VvQ6t2lXHQymLf5DJRI_aqpvsttwX_QXrnFnnm5ZvU87Z4_RBreurtrDTuQVxFgK2So0lxbnkhIjAR3rg"
              title="Jazz Nights"
              place="New Orleans, LA"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBchq9iFwmJikuaA1sOpmESMUi7L-jxbWQaAOqSCaG-Ipu7B2u26XdM4LfFOv7B0_gr9o31WPj3qLfB5kq2gh3UiF-wUi7WKCMBy7xg5aZMzufHRTqTAfSFT8z6ZTu9OZ2eMX-Hd20y78e38d3HTmH5bBtJC5pvMMla0MoU3EOKS7uhdpREiNtwr7XecIaAZESVgY8J10CbcktU09OH5A_Jhl5jXPIp5LhWTSGXHLNSHsiDxiyrpb-QHll1ojsXoIKw4sZ1szdDFA"
              title="Electronic Dance Mania"
              place="Las Vegas, NV"
            />
            <CarouselCard
              urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM8jLwRv7IKAPVzvUn0UGUUi_umjnxIfwNLCEOCNUvtfjB0A-TOcIZXyQrBTF1tCqQEH7w8udkbupSRvJOmhpXitrzJEGR7R4VyG3uXkm-ipLnwm4HL16Ap8kjeRCOHZDTIlP7_6YRitedgmZOKiAInXiGSrTefO2WJk4No3JoZ6OL4bBAA2l7aECHhvV6xYi4B2Qt-UGjzeGAoi9O4mUIJu3qSP67Nb3F9epbYieNp6r71YzvGLo_d_8K8-iOl5xY_7VZJ9cQ"
              title="Acoustic Sessions"
              place="Nashville, TN"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
