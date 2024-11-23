import "swiper/scss";
import { CardLayout } from "../../shared/layouts/cardLayout/CardLayout";
import { SocialQuestsLayout } from "../../shared/layouts/socialQuestsLayout/SocialQuestsLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./questsMain.module.scss";
import cn from "classnames";
import {
  socialQuests,
  SocialQuestsType,
} from "../../shared/const/socialQuests";
import "swiper/css";
import { BannerOne } from "../banners/BannerOne";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { ReactComponent as ArrowNext } from "../../shared/assets/icons/arrow_next.svg";
import { ReactComponent as ArrowPrev } from "../../shared/assets/icons/arrow_prev.svg";
import { Button } from "../../shared/ui/button/Button";

export const QuestsMain = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <>
      <BannerOne />

      <div className={s.blockEvents}>
        <h2 className={s.titleQuests}>
          Social Quests{" "}
          <span className={s.socialQuestsNumber}>
            1 / {socialQuests.length}
          </span>
        </h2>

        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          className={s.blockEventsSwiper}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          onSwiper={(swiperInstance: SwiperType) => {
            swiperRef.current = swiperInstance;
            swiperInstance.on("slideChange", () => {
              swiperRef.current = swiperInstance;
            });
          }}
          onSlideChange={() => {
            updateNavigationState();
          }}
        >
          {socialQuests.map((x: SocialQuestsType) => (
            <SwiperSlide key={x.id} className={s.customContainer}>
              <CardLayout
                classNamesContainer={cn({ [s.completed]: x.completed })}
              >
                <SocialQuestsLayout
                  completed={x.completed}
                  title={x.title}
                  textContent={x.textContent}
                  xp={x.xp}
                />
              </CardLayout>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.btnNavigation}>
          <button
            className={s.btnPrev}
            onClick={() => {
              swiperRef.current?.slidePrev();
              updateNavigationState();
            }}
            disabled={isBeginning}
          >
            <ArrowPrev />
          </button>
          <button
            className={s.btnNext}
            onClick={() => {
              swiperRef.current?.slideNext();
              updateNavigationState();
            }}
            disabled={isEnd}
          >
            <ArrowNext />
          </button>
        </div>
      </div>

      <div className={s.blockAllEvents}>
        <h2 className={s.titleQuests}>
          All Quests
          <span className={s.socialQuestsNumber}>{socialQuests.length}</span>
        </h2>

        <div className={s.tabsAllQuests}>
          <Button className={s.customClassName}>
            All Quests ({socialQuests.length})
          </Button>
          <Button btnTypeStyle="second" className={s.customClassNameSocial}>
            Social Quests{" "}
            <span className={s.socialQuestsNumber}>
              ({socialQuests.length})
            </span>
          </Button>
        </div>

        <div className={s.blockAllEventsCards}>
          {socialQuests.slice(0, 5).map((x: SocialQuestsType) => (
            <CardLayout
              key={x.id}
              classNamesContainer={cn(s.customEventsCard, {
                [s.completed]: x.completed,
              })}
            >
              <SocialQuestsLayout
                title={x.title}
                textContent={x.textContent}
                xp={x.xp}
                completed={x.completed}
              />
            </CardLayout>
          ))}
        </div>
      </div>
    </>
  );
};
