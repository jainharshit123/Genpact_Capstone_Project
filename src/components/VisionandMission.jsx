import React from "react";

const sharedClasses = {
  textPrimary: "text-black-700",
  textZinc600: "text-zinc-600",
  text2xl: "text-3xl",
  text3xl: "text-4xl",
  textLg: "text-lg",
  textXl: "text-2xl",
  fontBold: "font-bold",
  fontEBGaramond: "font-eb-garamond",
  flex: "flex",
  flexRow: "flex-row",
  flexCol: "flex-col",
  itemsCenter: "items-center",
  justifyBetween: "justify-between",
  justifyCenter: "justify-center",
  w1_2: "w-1/2",
  wFull: "w-full",
  p4: "p-4",
  p8: "p-8",
  mt2: "mt-4",
  roundedLg: "rounded-lg",
};

const VisionMissionCard = ({ title, description }) => {
  return (
    <div
      className={`${sharedClasses.wFull} ${sharedClasses.p4} ${sharedClasses.roundedLg} ${sharedClasses.shadowMd} ${sharedClasses.bgWhite}`}
    >
      <h2
        className={`${sharedClasses.text3xl} ${sharedClasses.fontBold} ${sharedClasses.textPrimary}`}
      >
        {title}
      </h2>
      <p
        className={`${sharedClasses.textXl} ${sharedClasses.fontEBGaramond} ${sharedClasses.textZinc600} ${sharedClasses.mt2}`}
      >
        {description}
      </p>
    </div>
  );
};

const VisionandMission = () => {
  return (
    <div
      className={`${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.justifyCenter} ${sharedClasses.wFull} ${sharedClasses.p8}`}
    >
      <VisionMissionCard
        title="Our Vision"
        description="Empowering individuals and communities through accessible knowledge and resources about medicinal herbs and plants."
      />
      <VisionMissionCard
        title="Our Mission"
        description="Building a sustainable future for medicinal herbs through accessible information and empowered communities."
      />
    </div>
  );
};

export default VisionandMission;
