export const TheDayOfSurgeryTitles = {
  titles: [
    "Routine Tests",
    "One or two weeks before admission",
    "The Day of Admission",
    "Night before Surgery",
    "The Day of Surgery",
    "Cardiac Intensive Care",
    "Equipment used during the surgery and in intensive care",
    "A wounded heart does heal",
    "Possible complications during your recovery",
  ],
};

export const TheDayOfSurgeryContents = {
  data: [
    {
      index: 0,
      subtitle: "Routine Tests",
      description: `Before you go for surgery you will have some
        routine hospital tests, which will help the
        doctors and nurses plan your hospital care.`,
      image: require("../assets/images/routine_test/alltest.svg"),
      id: 0,
    },
    {
      index: 0,
      subtitle: "Routine Tests",
      description: `This test tells the doctor what your
        heart rate and rhythm is. It will also show up
        heart muscle injury or damage.`,
      image: require("../assets/images/update/ecg.svg"),
      equipmentName: "ECG",
      id: 1,
    },
    {
      index: 0,
      subtitle: "Routine Tests",
      description: `These measure
        your blood count and show the doctors how
        well your lungs, heart and kidneys are
        working.`,
      image: require("../assets/images/routine_test/blood-urine.svg"),
      equipmentName: "Blood and Urine tests",
      id: 2,
    },
    {
      index: 0,
      subtitle: "Routine Tests",
      description: `This will show the surgeon if
        your heart and lungs are working properly.`,
      image: require("../assets/images/routine_test/xray.svg"),
      equipmentName: "Chest X-Ray",
      id: 3,
    },
    {
      index: 0,
      subtitle: "Routine Tests",
      description: `MRSA is a common
        bacteria (bug) which lives harmlessly on the
        skin or in the nose of about one in three people. 
        It sometimes causes infections.
        This is more likely to happen to those who
        are unwell. It is therefore important to
        identify those who carry it by screening.
        This involves using a cotton bud to swab
        the inside of your nose, groin and under-
        arms. If you test positive you will need to
        be re screened after treatment with special
        skin washes and creams.`,
      image: require("../assets/images/routine_test/mrsa.svg"),
      equipmentName: "MRSA screening",
      id: 4,
    },
    {
      index: 0,
      subtitle: "Routine Tests",
      description: `The gut of every
        normal, healthy human contains harmless
        bacteria. Some of these bacteria may be
        resistant to certain antibiotics, and may
        cause infections in people who are unwell.
        Screening involves taking a rectal swab.
        An information leaflet is available at the
        time of screening.`,
      image: require("../assets/images/routine_test/vrecpe.svg"),
      equipmentName: "VRE / CPE screening",
      id: 5,
    },
    //content 2
    {
      index: 1,
      subtitle: "One or two weeks before admission",
      description: `Medications that help prevent blood from
        clotting are called anti-platelets and
        anti-coagulants. These
        medications may need to be stopped up
        to seven days before your surgery.`,
      image: require("../assets/images/routine_test/para (1).svg"),
      equipmentName: "When to stop your medication",
      id: 6,
    },
    {
      index: 1,
      subtitle: "One or two weeks before admission",
      description: `It is very important that you discuss your
        medication with your surgeon and follow
        the instructions on when and what
        medication to stop.`,
      image: require("../assets/images/routine_test/para (2).svg"),
      id: 7,
    },
    {
      index: 1,
      subtitle: "One or two weeks before admission",
      description: `If you are unsure of which medication you
        need to stop then please contact your
        Cardiac Surgeon on (021) 492 0822.`,
      image: require("../assets/images/routine_test/para (3).svg"),
      id: 8,
    },
    //Before
    {
      index: 2,
      subtitle: "The Day of Admission",
      description:
        "Before leaving home on the morning of admission, it is essential that you ring 4D ward to ensure that a bed is available and your surgery is going ahead.",
      image: require("../assets/images/day-of-admission/1.svg"),
      id: 9,
    },
    {
      index: 2,
      subtitle: "The Day of Admission",
      description: "The Cardiac Surgery Ward contact details are:",
      image: require("../assets/images/preparing_for_your_surgery/CICU_Contact_Details02.svg"),
      id: 10,
    },

    {
      index: 2,
      subtitle: "The Day of Admission",
      descriptionHead: `Things to do - People to see and Places
      to go. `,
      description: `The average hospital stay after heart surgery
        is six to ten days. Some people may have to
        stay in hospital for longer. Remember
        everybody is different and you will recover
        at your own pace. When you come in to hospital you will be shown around the ward and you will meet the doctor and the nursing staff.`,
      image: require("../assets/images/day-of-admission/2.svg"),
      id: 11,
    },

    {
      index: 2,
      subtitle: "The Day of Admission",
      description:
        "Please tell the doctor the following informations about you",
      image: require("../assets/images/day-of-admission/3.svg"),
      id: 12,
    },
    {
      index: 2,
      subtitle: "The Day of Admission",
      description:
        "Please tell the doctor the following informations about you",
      image: require("../assets/images/day-of-admission/3-2.svg"),
      id: 13,
    },
    {
      index: 2,
      subtitle: "The Day of Admission",
      description:
        "Please tell the doctor the following informations about you",
      image: require("../assets/images/day-of-admission/3-3.svg"),
      id: 14,
    },
    {
      index: 3,
      subtitle: "Night before Surgery",
      description:
        "We will tell you whether you are first,second or third on the theatre list and ask you not to eat or drink from 12 midnight.This ensures that your stomach is empty during the operation. Even though you are fasting it is okay to take your tablets with a small sip of water.",
      image: require("../assets/images/Night_before_Surgery/Group_779.svg"),
      id: 15,
    },

    {
      index: 3,
      subtitle: "Night before Surgery",
      description:
        "It is normal to be anxious the night before your operation and you may have difficulty sleeping. If you like, we can give you a sleeping tablet to help you get a good night’s rest.",
      image: require("../assets/images/Night_before_Surgery/Group_780.svg"),
      id: 16,
    },

    {
      index: 4,
      subtitle: "The Day of Surgery",
      description:
        "We will ask you to use a special shower gel that Cleans your skin and removes germs.",
      image: require("../assets/images/The_Day_of_Surgery/Group_778.svg"),
      id: 17,
    },
    {
      index: 4,
      subtitle: "The Day of Surgery",
      description: `On the morning of your surgery your nurse will give you a hospital gown to wear. We will ask you to remove the following:`,
      arrDesc: [
        "False Teeth",
        "Jewellery",
        "Hairclips",
        "Contact Lenses",
        "Hairpieces",
        "Artificial body parts",
        "Nail Polish",
        "Make-up",
        "All underwear",
        "Hearing aid",
      ],
      image: require("../assets/images/The_Day_of_Surgery/Group_776.svg"),
      id: 18,
    },

    {
      index: 4,
      subtitle: "The Day of Surgery",
      description:
        "While you are waiting to go to the operating theatre, we will give you some tablets to help you relax. Go to the bathroom before you take these tablets as they can make you feel sleepy",
      image: require("../assets/images/The_Day_of_Surgery/Group_775.svg"),
      id: 19,
    },
    {
      index: 4,
      subtitle: "The Day of Surgery",
      description:
        "Your operation will take several hours and after that we will take you to the Cardiac Intensive Care Unit on the 5th Floor. You will have your own nurse who together with the doctors will watch your progress very closely",
      image: require("../assets/images/The_Day_of_Surgery/Group_777.svg"),
      id: 20,
    },
    {
      index: 5,
      subtitle: "Cardiac Intensive Care",
      description:
        "Please nominate one family member to phone the Cardiac Intensive Care Unit (CICU) to enquire about you ",
      image: require("../assets/images/day-of-admission/4.svg"),
      id: 21,
    },

    {
      index: 5,
      subtitle: "Cardiac Intensive Care",
      description: "The Cardiac Intensive Care unit contact details",
      image: require("../assets/images/Cardiac_Intensive_Care_main/CICU_Contact_Details.svg"),
      id: 22,
    },

    {
      index: 5,
      subtitle: "Cardiac Intensive Care",
      description: "The Cardiac Intensive Care Visiting Times",
      image: require("../assets/images/Cardiac_Intensive_Care_main/CICU-Visiting_Times.svg"),
      id: 23,
    },
    {
      index: 5,
      subtitle: "Cardiac Intensive Care",
      description: `The Cardiac Intensive Care Visiting Times.`,
      image: require("../assets/images/Cardiac_Intensive_Care_main/CICU-Visiting_Times_2.svg"),
      id: 24,
    },
    {
      index: 5,
      subtitle: "Cardiac Intensive Care",
      description: `After the first day or two you will no longer
      need close observation in the CICU and we
      will take you back to 4D ward on the 4th
      floor.`,
      image: require("../assets/images/preparing_for_your_surgery/general.svg"),
      id: 25,
    },
    {
      index: 6,
      subtitle: "Endotracheal (Breathing) Tube",
      description: `The anaesthetic doctor will place this tube
        in your throat when you are asleep. We will
        attach you to a breathing machine
        (ventilator), which will help you breathe
        properly during the operation. As you wake
        up you may become aware of this tube.
        You cannot talk with it in place but you can
        nod or shake your head in response to
        questions. When you are fully awake you
        will not need the breathing machine or
        tube any more. The doctor or nurse will
        remove it (usually within 24 hours following
        your operation). You may have a sore
        throat for a day or so.`,
      image: require("../assets/images/preparing_for_your_surgery/tube1.svg"),
      id: 26,
      equipmentName: "Endotracheal (Breathing) Tube",
    },
    {
      index: 6,
      subtitle: "Nasogastric Tube",
      description:
        "This tube is passed through your nose into your stomach when you are asleep. It will drain any fluid, which may be in your tummy and help prevent you feeling sick after your operation. We will remove it in the first 24 hours after surgery.",
      image: require("../assets/images/cardiac_intensive_care_tool/Group_794.svg"),
      id: 27,
      equipmentName: "Nasogastric Tube",
    },
    {
      index: 6,
      subtitle: "Chest Drain Tubes",
      description:
        "These tubes collect any fluid left in your chest after surgery. We usually remove them the day after your operation or when the chest drainage stops.",
      image: require("../assets/images/cardiac_intensive_care_tool/Chest_drain_tubes.svg"),
      id: 28,
      equipmentName: "Chest Drain Tubes",
    },
    {
      index: 6,
      subtitle: "Arterial Line",
      description:
        "We put this in your arm to measure blood pressure and take blood samples. We remove it before you go to Ward 4D from the Cardiac Intensive Care Unit.",
      image: require("../assets/images/cardiac_intensive_care_tool/Arterial_Line.svg"),
      id: 29,
      equipmentName: "Arterial Line",
    },
    {
      index: 6,
      subtitle: "Urinary Catheter",
      description:
        "We put a tube, called a urinary catheter, in your bladder to collect your urine. It allows the doctors and nurses to see how well your kidneys are working. We will take it out when you are up and about.",
      image: require("../assets/images/cardiac_intensive_care_tool/urine_bag.svg"),
      id: 30,
      equipmentName: "Urinary Catheter",
    },
    {
      index: 6,
      subtitle: "Intravenous Lines",
      description: `Special lines (drips)
        which allow the doctors and nurses to give
        you medication and fluid. We take these out
        gradually within a few days following your
        operation.`,
      image: require("../assets/images/preparing_for_your_surgery/tube2.svg"),
      id: 31,
      equipmentName: "Intravenous Lines",
    },
    {
      index: 6,
      subtitle: "Heart Monitor",
      description:
        "Shows your heart rate and rhythm to the staff looking after you.",
      image: require("../assets/images/cardiac_intensive_care_tool/Heart_monitor.svg"),
      id: 32,
      equipmentName: "Heart Monitor",
    },
    {
      index: 6,
      subtitle: "An Oxygen Mask or Nasal Prongs",
      description:
        "This will give you oxygen, which you will need for a few days after your operation.",
      image: require("../assets/images/cardiac_intensive_care_tool/An_Oxygen_Mask_or_Nasal_Prongs.svg"),
      id: 33,
      equipmentName: "An Oxygen Mask or Nasal Prongs",
    },
    {
      index: 6,
      subtitle: "Temporary Pacemaker Wires",
      description:
        "These wires are attached to your heart during surgery. They are used to change your heart rhythm if needed. They are removed a few days after your operation.",
      image: require("../assets/images/cardiac_intensive_care_tool/Temporary_Pacemaker_wires.svg"),
      id: 34,
      equipmentName: "Temporary Pacemaker Wires",
    },
    {
      index: 7,
      subtitle: "A wounded heart does heal",
      description:
        "In order to operate on your heart, the surgeon must make a cut into the front of your chest and divide your breast bone (sternum). If you are having coronary heart surgery, then an incision will also be made into your leg or arm to remove a blood vessel, which the surgeon will use to bypass the blockages in your coronary arteries.",
      image: require("../assets/images/update/strech2.png"),
      id: 35,
    },
    {
      index: 7,
      subtitle: "A wounded heart does heal",
      description:
        "After your operation, the surgeon will use special surgical wire to set the breastbone again. This wire is very strong and will stay in your body forever. You can’t feel these wires but they will show up on a chest x-ray. The cut in your skin is stitched, stapled or glued together and covered with a dressing. You will have a scar which will fade as it heals. . your breastbone usually takes six weeks or more to heal.",
      image: require("../assets/images/update/strech.png"),
      id: 36,
    },
    {
      index: 7,
      subtitle: "A wounded heart does heal",
      description:
        "During the first few days after surgery your chest, leg or arm wounds may be sore. Please tell your nurse if you are sore. We will give you painkillers at regular intervals, to ease the soreness and make moving around easier. Some people may experience a tingling feeling over their chest and arm when the arteries from these areas are used for the bypass. Your wound may feel itchy, lumpy or numb and you may notice swelling and bruising. These symptoms are a normal part of healing and will disappear in the weeks following surgery",
      image: require("../assets/images/update/heart medication-3.svg"),
      id: 37,
    },

    {
      index: 8,
      subtitle: "Possible complications during your recovery",
      description: "Nausea (feeling sick)",
      image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-01.svg"),
      id: 38,
    },
    {
      index: 8,
      subtitle: "Possible complications during your recovery",
      description: "Constipation",
      image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-02.svg"),
      id: 39,
    },
    {
      index: 8,
      subtitle: "Possible complications during your recovery",
      description:
        "Tiredness, forgetfulness and lack of concentration. This may persist for a couple of weeks after surgery, and usually improves with time and rest.",
      image: require("../assets/images/Possible_complications_during_your_recovery/Group_815.svg"),
      id: 40,
    },
    {
      index: 8,
      subtitle: "Possible complications during your recovery",
      description:
        "Occasionally, people may experience vivid dreams or become confused and disorientated after surgery. Do not worry if this happens to you as it is a side effect of the surgery and will pass.",
      image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-03.svg"),
      id: 41,
    },
    {
      index: 8,
      subtitle: "Possible complications during your recovery",
      description:
        "Atrial Fibrillation. This is an irregular heartbeat which may make you feel weak, sweaty or have palpitations.",
      image: require("../assets/images/update/heart-run.svg"),
      id: 42,
    },
    {
      index: 8,
      subtitle: "Possible complications during your recovery",
      description: `Pleural effusion - this is a collection of
      fluid in the lining of your lungs (pleura).
      It is very common after heart surgery.
      Your doctor will be able to see it on
      a chest x-ray. It can stop without treatment. However, in a small number of
      people the collection of fluid is large and
      you may feel short of breath and need to
      have the fluid removed. Your surgeon
      will give you a local anaesthetic to numb
      the area and will put in a tube to drain
      the fluid. The tube will remain in your
      chest until an x-ray shows all the fluid
      is gone.`,
      image: require("../assets/images/lungs.svg"),
      id: 43,
    },
  ],
};

export const ReturningHomeContent = {
  page: "Returning Home",
  title: "Getting back to normal",
  subtitle: null,
  data: [
    {
      header: "Getting back to normal",
      description: null,
      content:
        "After your heart surgery you may find that your concentration is poor. This usually returns to normal during your recovery at home.Some people also find their memory is affected but this is usually temporary and gradually resolves within six months of your surgery. If this problem persists please speak to your GP. Some people also find their memory is affected but this is usually temporary and gradually resolves within six months of your surgery. If this problem persists please speak to your GP",
      image: require("../assets/images/Night_before_Surgery/Group_779.svg"),
      button: true,
    },
    {
      header: "Eating well as you recover",
      description: null,
      content:
        "Some people may have a poor appetite for a few days after surgery. If this persists for longer please ask your doctor or nurse to refer you to a dietitian.A healthy balanced diet is recommended as you recover. If you have been advised to lose weight after your surgery, you should wait until your wound has fully healed.This can take up to six weeks.Do not diet or lose weight during this period.See ‘Healthy Eating for a Healthy Heart’.",
      image: require("../assets/images/Night_before_Surgery/Group_780.svg"),
      button: true,
    },
    {
      header: "Lifting",
      description: null,
      content:
        "Activities such as lifting, carrying, pushing and pulling will strain your heart and breastbone.Avoid them during your recovery period.Don’t lift anything over 10 – 15 lbs(4.5 – 7 kg) during your recovery.Ways to avoid this include using a trolley, using home delivery, sliding objects rather than lifting.Do not carry children or walk dogs during the first six weeks at home.Do not carry your cases, open stuck windows, unscrew jar lids or use corkscrews.",
      image: require("../assets/images/Night_before_Surgery/Group_779.svg"),
      button: true,
    },
  ],
};

export const calenderContents = [
  {
    title: "Week 1",
    image: require("../assets/images/Resuming Home/Group 3.png"),
    content: [
      `Get into a routine of taking your
            medication.`,
      `Take a morning and afternoon rest.`,
      `Do not encourage too many visitors –
            they can be exhausting.`,
      `Take your time.`,
      `Avoid lifting activities.`,
      `Only walk as much as you did while in
            hospital`,
    ],
  },
  {
    title: "Week 2",
    image: require("../assets/images/Resuming Home/Group 7.png"),
    content: [
      `Morning or afternoon rest.`,
      `Visit a friend nearby.`,
      `Short car trips as a passenger.`,
      `Light housework only e.g. prepare a cup
        of tea, wash and dry dishes.`,
      `Begin
        walking programme.`,
    ],
  },
  {
    title: "Week 3",
    image: require("../assets/images/Resuming Home/Group 6.png"),
    content: [
      `Increase housework e.g. make the bed,
        sit to iron, prepare a light meal.`,
      `Go
        shopping with someone – do not carry any
        bags.`,
      `If you feel well, go out for a meal – watch
        what you eat.`,
      `Continue walking programme.`,
    ],
  },

  {
    title: "Week 4 - 6",
    image: require("../assets/images/Resuming Home/Group 8.svg"),
    content: [
      `Increase housework e.g. light sweeping,
        a little laundry – one load at a time.`,
      `Moderate housework e.g. mop/hoover
        floor if they move easily.`,
      `Light gardening – seated to begin.`,
      `Outing to cinema or restaurant.`,
      `Start most household activities except for
        heavy lifting.`,
      `Continue walking programme.`,
    ],
  },
  {
    title: "Week 6 Onwards",
    image: require("../assets/images/Resuming Home/Group 5.png"),
    content: [
      `Outpatient appointment with your
        surgeon is usually 6-10 weeks from
        time of discharge from hospital.`,
      `Ask your doctor three questions at this
        point:`,
      `Make sure you contact your cardiologist
        (heart doctor) to arrange an outpatient
        visit after your surgeon has discharged
        you from his/her care.`,
      `Continue walking programme`,
    ],
    point: true,
    index: 1,
    points: [
      `1. When will I be allowed drive?`,
      `2. When will I be allowed back to work?`,
      `3. When can I fly?`,
    ],
  },
  {
    title: "Week 12 Onwards",
    image: require("../assets/images/Resuming Home/Group 4.png"),
    content: [
      `Fishing`,
      `Golfing`,
      `Swimming`,
      `Cycling`,
      `Continue walking programme.`,
      `Racquet sports`,
      `Walking dog on a lead`,
      `Mowing the lawn`,
      `Gardening`,
    ],
    contentTop: "The following activities may be resumed if you are able:`",
  },
];

export const returnHomeContent = [
  {
    title: "Eating well as you recover",
    image: require("../assets/images/returning_home/Group 4.png"),
    content: [
      `Some people may have a poor appetite
            for a few days after surgery. If this persists
            for longer please ask your doctor or nurse
            to refer you to a dietitian. A healthy
            balanced diet is recommended as you
            recover. If you have been advised to lose
            weight after your surgery, you should wait
            until your wound has fully healed. This can
            take up to six weeks. Do not diet or lose
            weight during this period. See ‘Healthy
            Eating for a Healthy Heart’.`,
    ],
  },
  {
    title: "Lifting",
    image: require("../assets/images/returning_home/Group 5.png"),
    content: [
      `Activities such as lifting, carrying, pushing
            and pulling will strain your heart and
            breastbone. Avoid them during your
            recovery period. Don’t lift anything over
            10 – 15 lbs (4.5 – 7 kg) during your
            recovery. Ways to avoid this include using
            a trolley, using home delivery, sliding
            objects rather than lifting. Do not carry
            children or walk dogs during the first six
            weeks at home. Do not carry your cases,
            open stuck windows, unscrew jar lids or
            use corkscrews.`,
    ],
  },
  {
    title: "Driving",
    image: require("../assets/images/returning_home/Group 6.png"),
    content: [
      `Most people are permitted to drive after
      six weeks. When you return to driving,
      start in your local area, avoid peak hours,
      have another person with you and
      gradually increase the time you spend
      driving.`,
    ],
  },

  {
    title: "Driving",
    image: require("../assets/images/returning_home/Group 6.png"),
    content: [
      ``,
      `Avoid long trips at first and take frequent
      rest breaks.`,
      `If you drive for a living (heavy goods
        vehicle / passenger service vehicle), you
        will usually not be allowed to resume for
        a much longer period of time. Your doctor
        may want you to undergo an exercise
        stress test before you are permitted to
        drive.`,
      `You must tell your insurance company
      that you have had heart surgery.`,
    ],
  },
  {
    title: "Work",
    image: require("../assets/images/returning_home/Group 8.png"),
    content: [
      `Work can be physically and mentally
      demanding on your body. It can take from
      six weeks to six months to return to work,
      depending on the type of work that you do.`,
    ],
  },
  {
    title: "Work",
    image: require("../assets/images/returning_home/Group 8.png"),
    content: [
      ``,
      `It is important to talk to your doctor about
      the type of work you do and how soon
      you can go back after heart surgery. You
      must consider the demands of your job.`,
      `If you have a heavy manual job, there
      are schemes available to re-train you for
      more suitable work.`,
      `Talk to the Cardiac Rehabilitation Team
      at the hospital if you have any concerns
      about returning to work or the type of
      work that you do.`,
    ],
  },
  {
    title: "Sexual activity",
    image: require("../assets/images/returning_home/Group 11.png"),
    content: [
      `
        Return to sexual activity when you and
        your partner are mentally and physically
        ready. This varies from couple to couple
        but may start as early as two to three
        weeks after heart surgery. Find a position
        that is comfortable for you and your
        partner. It is advisable to wait for an hour
        after a meal.`,
    ],
    title2: "Washing and Bathing",
    navLink: "/heart-surgery/after_surgery#WashingAndDressing",
    navLinkText: "(Refer After Surgery)",
    content2: `Don’t have a bath for the first three months (Refer After Surgery).`,
  },
  {
    title: "Erectile dysfunction (Impotence)",
    image: require("../assets/images/returning_home/Group 12.png"),
    content: [
      `
        Erectile Dysfunction (ED) affects one in
        ten Irish males over the age of 21 at
        some stage in their lives. Coronary Artery
        Disease and ED are often linked because
        they share similar risk factors, such as
        smoking, high cholesterol, excessive
        alcohol consumption, diabetes, and high
        blood pressure. Since there are other
        causes, it is best to talk to your GP if this
        problem affects you. Bear in mind that ED
        is a common problem and that your GP
        can treat the majority of cases of ED
        simply with medication.`,
      "It is important to note that while the medications used for ED are safe, they should not be taken if you are prescribed medications called nitrates, or GTN spray (even occasionally) for your heart condition.",
    ],
  },
  {
    title: "Rest and sleep",
    image: require("../assets/images/returning_home/Group 13.png"),
    content: [
      `You may have problems sleeping after
            heart surgery. It can take some time to get
            back to your normal sleeping pattern.
            Here are some simple tips to help reduce
            this problem:`,
      `Sleep in whatever position you feel most
            comfortable. Avoid lying on your back for
            a long time as it isn’t good for your
            breathing.`,
      `For the first few weeks you may need to
            take some pain medication, to relieve
            chest discomfort, which could be
            stopping you from sleeping.`,
      `Gradually increase your day time
            activity.`,
    ],
  },
  {
    title: "Rest and sleep",
    image: require("../assets/images/returning_home/Group 13.png"),
    content: [
      ``,
      `Try to get up at the same time each
            morning.`,

      `Gradually reduce the number of naps
            you take during the day.`,
      `Wind down during the hours before
            bed - time, for example watch TV, listen to
            music or practise deep breathing.`,
      `Avoid stimulating drinks(coffee, tea or cola)
             at least two hours before bed - time.
            Alcohol may send you off to sleep, but
            alcohol induced sleep is generally of
            poorer quality.`,
      `Check that your room is not too warm or
            too cold.`,
      `If you still can’t sleep, get up and try
            listening to relaxing music, read a book or
            watch TV. Return to bed when you feel
            tired again. If sleep continues to be a
            problem, talk to your doctor`,
    ],
  },
];

//excercise

export const excerciseContent = [
  {
    nextPageLink: "/shoulder_girdle",
    prevPageLink: "/range_of_movement_exercises",
    position: "Sitting Exercise 1",
    excerciseName: "Neck Mobilisation",
    videoUrl: require("../assets/video/frame.mp4"),
    content: [
      "Starting Position: Sit up straight and tall in an upright chair, eyes looking straight ahead.",
      "a) Bend your neck from side to side. Feel your neck muscles stretching.",
      "b) Turn your head to look over your shoulder. Repeat to the other side.",
      "Repeat 2 to 3 times.",
    ],
  },
  {
    nextPageLink: "/arm_raising",
    prevPageLink: "/neck_mobilisation",
    position: "Sitting Exercise 2",
    excerciseName: "Shoulder Girdle Exercises",
    videoUrl: require("../assets/video/ex7.mp4"),
    content: [
      `Starting Position: Sit up straight and tall in an upright
      chair.`,
      `a) Shrug shoulders up to ears and gently ease them back down.`,
      `b) Make big circles by rolling the shoulders forward and then
      backwards.`,
      `Repeat 2 to 3 times.`,
    ],
  },
  {
    nextPageLink: "/trunk_twists",
    prevPageLink: "/shoulder_girdle",
    position: "Sitting Exercise 3",
    excerciseName: "Arm Raising",
    videoUrl: require("../assets/video/ex6.mp4"),
    content: [
      `Starting Position: Sit up straight and tall in an upright chair.`,
      `Lift both arms out to the side and up over your head. Try to
      clap your hands together. Do not use jerky movements.`,
      `Repeat 2 to 3 times.`,
    ],
  },
  {
    nextPageLink: "/side_bending",
    prevPageLink: "/arm_raising",
    position: "Sitting Exercise 4",
    excerciseName: "Trunk Twists",
    videoUrl: require("../assets/video/ex8.mp4"),
    content: [
      `Sit up straight and tall in an upright chair with your
      arms crossed over your chest.`,
      `Twist the top half (only) of your body as if looking
      behind you, to the right and then to the left. Try
      not to move your bottom half, keep your hips
      facing forward.`,
      `Repeat 2 to 3 times.`,
    ],
  },
  {
    nextPageLink: "/leg_swings",
    prevPageLink: "/trunk_twists",
    position: "Standing Exercise 1",
    excerciseName: "Side Bending",
    videoUrl: require("../assets/video/1.mp4"),
    content: [
      `Starting position: Stand up straight and tall, feet slightly
      apart, arms loose by your side.`,
      `a) Slowly bend to the left allowing your arm to slide down
      your leg.`,
      `b) Repeat to the right side.`,
      `Repeat 2 to 3 times.`,
      `Note: Try to make this a pure movement to the side. Imagine
      you are trying to slide between 2 panes of glass so that you
      don’t lean forward or backwards.`,
    ],
  },
  {
    nextPageLink: "/knee_bends",
    prevPageLink: "/side_bending",
    position: "Standing Exercise 2",
    excerciseName: "Leg Swings",
    videoUrl: require("../assets/video/3.mp4"),
    content: [
      `Starting Position: Stand, holding on to the back of a chair
      with your right hand.`,
      `a) Swing your left leg forward and back in a smooth relaxed
      motion. Keep your back straight.`,
      `b) Keep your knee relaxed, it will bend slightly.`,
      `c) Turn and repeat with your right leg.`,
      `Repeat 2 to 3 times.`,
    ],
  },
  {
    nextPageLink: "/heel_raises",
    prevPageLink: "/leg_swings",
    position: "Standing Exercise 3",
    excerciseName: "Knee Bends",
    videoUrl: require("../assets/video/ex5.mp4"),
    content: [
      `Starting Position: Stand tall, legs a foot apart. Hold on to
      chair if you need support.`,
      `a) Bend your knees to a comfortable degree, straighten up.
      Keep your back straight.`,
      `Repeat 2 to 3 times. Gradually build up to 10 times.`,
      `Note: If you have a wound near your knee, don’t bend too low
      as it will pull on the wound. See if you can gradually bend
      more as your leg wound improves.`,
    ],
  },
  {
    nextPageLink: "/returning_home",
    prevPageLink: "/knee_bends",
    position: "Standing Exercise 4",
    excerciseName: "Heel Raises",
    videoUrl: require("../assets/video/2.mp4"),
    content: [
      `Starting Position: Stand straight and tall, legs about a foot
      apart. Hold on to a chair or table for support.`,
      `Stand up on your toes, lower down again. Keep your back
      straight. Try not to push on the chair with your arms.`,
      `Repeat 2 to 3 times. Gradually build up to 10 times.`,
    ],
  },

  // {
  //   nextPageLink: "/returning_home",
  //   prevPageLink: "/leg_swings",
  //   position: 'Standing Exercise 1:',
  //   excerciseName: "Arm Raising",
  //   videoUrl: require("../assets/video/hand_main.mp4"),
  //   content: [
  //     `Starting Position: Sit up straight and tall in an upright
  //     chair.`,
  //     ` Lift both arms out to the side and up over your head. Try to
  //     clap your hands together. Do not use jerky movements.`,
  //     `Repeat 2 to 3 times.`,
  //   ],
  // },
];

export const homeWalking = [
  {
    stage: "Stage 1",
    description: "Walk slowly for 5 minutes - at least twice daily",
    src: require("../assets/images/home walking/10.png"),
    feel: "Light",
  },
  {
    stage: "Stage 2",
    description: "Walk slowly for 7 minutes - at least twice daily",
    src: require("../assets/images/home walking/14.png"),
    feel: "Light",
  },
  {
    stage: "Stage 3",
    description: "Walk slowly for 10 minutes - at least twice daily",
    src: require("../assets/images/home walking/20.png"),
    feel: "Light",
  },
  {
    stage: "Stage 4",
    description: "Walk slowly for 12 minutes - at least twice daily",
    src: require("../assets/images/home walking/24.png"),
    feel: "Light",
  },
  {
    stage: "Stage 5",
    description: "Walk slowly for 15 minutes - at least twice daily",
    src: require("../assets/images/home walking/30.png"),
    feel: "Light",
  },
  {
    stage: "Stage 6",
    description: "Walk slowly for 17 minutes - at least twice daily",
    src: require("../assets/images/home walking/34.png"),
    feel: "Light",
  },
  {
    stage: "Stage 7",
    description: "Walk slowly for 20 minutes - at least twice daily",
    src: require("../assets/images/home walking/40.png"),
    feel: "Light",
  },
  {
    stage: "Stage 8",
    description: `Walk slowly for 25 minutes - at least once daily
    (If you want to do another walk that’s ok,
    it does not need to be as long)`,
    src: require("../assets/images/home walking/25plus.png"),
    feel: "Light",
  },
  {
    stage: "Stage 9",
    description: "Walk slowly for 30 minutes - at least once daily",
    src: require("../assets/images/home walking/30plus.png"),
    feel: "Light",
  },
  {
    description: `If you feel comfortable you can now start increasing your walking pace to a brisk pace during the middle
    section of the walk. Remember to always walk at a slower pace at the beginning and end.`,
  },
  {
    stage: "Stage 10",
    description: `10 minutes strolling (warm up)`,
    src: require("../assets/images/home walking/30.png"),
    feel: "Light",
  },
  {
    stage: "Stage 10",
    description: `Try to walk faster for the next 10 minutes (Middle bit)`,
    src: require("../assets/images/home walking/30.png"),
    feel: "Somewhat Hard",
  },
  {
    stage: "Stage 10",
    description: `Stroll for 10 minutes more (Cool down) `,
    src: require("../assets/images/home walking/30.png"),
    feel: "Light",
  },
  {
    stage: "Stage 11",
    description: `stroll for 12 minutes (warm up)`,
    src: require("../assets/images/home walking/34.png"),
    feel: "Light",
  },
  {
    stage: "Stage 11",
    description: `Faster walk for 10 minutes (Middle bit)`,
    src: require("../assets/images/home walking/34.png"),
    feel: "Somewhat Hard",
  },
  {
    stage: "Stage 11",
    description: `stroll for 12 minutes (cool down)`,
    src: require("../assets/images/home walking/34.png"),
    feel: "Light",
  },
  {
    stage: "Stage 12",
    description: `stroll for 15 minutes (warm up)`,
    src: require("../assets/images/home walking/40.png"),
    feel: "Light",
  },
  {
    stage: "Stage 12",
    description: `Faster walk for 10 minutes (Middle bit)`,
    src: require("../assets/images/home walking/40.png"),
    feel: "Somewhat Hard",
  },
  {
    stage: "Stage 12",
    description: `stroll for 15 minutes (cool down)`,
    src: require("../assets/images/home walking/40.png"),
    feel: "Light",
  },
  {
    description: `From then on gradually build up the length of the middle (faster) part of the walk until
    you reach the exercise target for life. Remember to always walk at a slower pace at the
    beginning and end.`,
    src: require("../assets/images/home walking/60plus.png"),
  },
];

export const TheDayOfSurgery = {
  data: [
    {
      id: 0,
      title: "Night before Surgery",
      content: [
        {
          subtitle: "Night before Surgery",
          description:
            "We will tell you whether you are first,second or third on the theatre list and ask you not to eat or drink from 12 midnight.This ensures that your stomach is empty during the operation. Even though you are fasting it is okay to take your tablets with a small sip of water.",
          image: require("../assets/images/Night_before_Surgery/Group_779.svg"),
        },
        {
          subtitle: "Night before Surgery",
          description:
            "It is normal to be anxious the night before your operation and you may have difficulty sleeping. If you like, we can give you a sleeping tablet to help you get a good night’s rest.",
          image: require("../assets/images/Night_before_Surgery/Group_780.svg"),
        },
      ],
    },

    {
      id: 1,
      title: "The Day of Admission",
      content: [
        {
          subtitle: "Night before Surgery",
          description:
            "We will tell you whether you are first,second or third on the theatre list and ask you not to eat or drink from 12 midnight.This ensures that your stomach is empty during the operation. Even though you are fasting it is okay to take your tablets with a small sip of water.",
          image: require("../assets/images/Night_before_Surgery/Group_779.svg"),
        },
        {
          subtitle: "Night before Surgery",
          description:
            "It is normal to be anxious the night before your operation and you may have difficulty sleeping. If you like, we can give you a sleeping tablet to help you get a good night’s rest.",
          image: require("../assets/images/Night_before_Surgery/Group_780.svg"),
        },
      ],
    },

    {
      id: 2,
      title: "The Day of Surgery",
      content: [
        {
          subtitle: "The Day of Surgery",
          description:
            "We will ask you to use a special shower gel that Cleans your skin and removes germs.",
          image: require("../assets/images/The_Day_of_Surgery/Group_778.svg"),
        },
        {
          subtitle: "The Day of Surgery",
          arrDesc: [
            "False Teeth",
            "Jewellery",
            "Hairclips",
            "Contact Lenses",
            "Hairpieces",
            "Artificial body parts",
            "Nail Polish",
            "Make-up",
            "All underwear",
            "Hearing aid",
          ],
          description: `
                        On the morning of your surgery your nurse will give you a hospital gown to wear.
                        We will ask you to remove the following: `,
          image: require("../assets/images/The_Day_of_Surgery/Group_776.svg"),
        },
        {
          subtitle: "The Day of Surgery",
          description:
            "Please tell the doctor the following informations about you.",
          image: require("../assets/images/The_Day_of_Surgery/Group_782.svg"),
        },
        {
          subtitle: "The Day of Surgery",
          description:
            "While you are waiting to go to the operating theatre, we will give you some tablets to help you relax. Go to the bathroom before you take these tablets as they can make you feel sleepy",
          image: require("../assets/images/The_Day_of_Surgery/Group_775.svg"),
        },
        {
          subtitle: "The Day of Surgery",
          description:
            "Your operation will take several hours and after that we will take you to the Cardiac Intensive Care Unit on the 5th Floor. You will have your own nurse who together with the doctors will watch your progress very closely",
          image: require("../assets/images/The_Day_of_Surgery/Group_777.svg"),
        },
      ],
    },
    {
      id: 3,
      title: "Cardiac Intensive Care",
      content: [
        {
          subtitle: "Cardiac Intensive Care",
          description: "The Cardiac Intensive Care unit contact details",
          image: require("../assets/images/Cardiac_Intensive_Care_main/CICU_Contact_Details.svg"),
        },
        {
          subtitle: "Cardiac Intensive Care",
          description: "The Cardiac Intensive Care Visiting Times",
          image: require("../assets/images/Cardiac_Intensive_Care_main/CICU-Visiting_Times.svg"),
        },
        {
          subtitle: "Cardiac Intensive Care",
          description: "The Cardiac Intensive Care Visiting Times",
          image: require("../assets/images/Cardiac_Intensive_Care_main/CICU-Visiting_Times_2.svg"),
        },
      ],
    },
    {
      id: 4,
      title: "Equipment used during the surgery and in intensive care",
      content: [
        {
          subtitle: "Heart Monitor",
          description:
            "Shows your heart rate and rhythm to the staff looking after you.",
          image: require("../assets/images/cardiac_intensive_care_tool/Heart_monitor.svg"),
          equipmentName: "Heart Monitor",
        },
        {
          subtitle: "Arterial Line",
          description:
            "We put this in your arm to measure blood pressure and take blood samples. We remove it before you go to Ward 4D from the Cardiac Intensive Care Unit.",
          image: require("../assets/images/cardiac_intensive_care_tool/Arterial_Line.svg"),
        },
        {
          subtitle: "Temporary Pacemaker Wires",
          description:
            "These wires are attached to your heart during surgery. They are used to change your heart rhythm if needed. They are removed a few days after your operation.",
          image: require("../assets/images/cardiac_intensive_care_tool/Temporary_Pacemaker_wires.svg"),
        },
        {
          subtitle: "Urinary Catheter",
          description:
            "We put a tube, called a urinary catheter, in your bladder to collect your urine. It allows the doctors and nurses to see how well your kidneys are working. We will take it out when you are up and about.",
          image: require("../assets/images/cardiac_intensive_care_tool/urine_bag.svg"),
        },
        {
          subtitle: "Nasogastric Tube",
          description:
            "This tube is passed through your nose into your stomach when you are asleep. It will drain any fluid, which may be in your tummy and help prevent you feeling sick after your operation. We will remove it in the first 24 hours after surgery.",
          image: require("../assets/images/cardiac_intensive_care_tool/Group_794.svg"),
        },
        {
          subtitle: "Chest Drain Tubes",
          description:
            "These tubes collect any fluid left in your chest after surgery. We usually remove them the day after your operation or when the chest drainage stops.",
          image: require("../assets/images/cardiac_intensive_care_tool/Chest_drain_tubes.svg"),
        },
        {
          subtitle: "An Oxygen Mask or Nasal Prongs",
          description:
            "This will give you oxygen, which you will need for a few days after your operation.",
          image: require("../assets/images/cardiac_intensive_care_tool/An_Oxygen_Mask_or_Nasal_Prongs.svg"),
        },
      ],
    },
    {
      id: 5,
      title: "Possible complications during your recovery",
      content: [
        {
          subtitle: "Possible complications during your recovery",
          description: "Nausea (feeling sick)",
          image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-01.svg"),
        },
        {
          subtitle: "Possible complications during your recovery",
          description: "Constipation",
          image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-02.svg"),
        },
        {
          subtitle: "Possible complications during your recovery",
          description:
            "Tiredness, forgetfulness and lack of concentration. This may persist for a couple of weeks after surgery, and usually improves with time and rest.",
          image: require("../assets/images/Possible_complications_during_your_recovery/Group_815.svg"),
        },
        {
          subtitle: "Possible complications during your recovery",
          description:
            "Occasionally, people may experience vivid dreams or become confused and disorientated after surgery. Do not worry if this happens to you as it is a side effect of the surgery and will pass.",
          image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-03.svg"),
        },
        {
          subtitle: "Possible complications during your recovery",
          description:
            "Atrial Fibrillation. This is an irregular heartbeat which may make you feel weak, sweaty or have palpitations.",
          image: require("../assets/images/Possible_complications_during_your_recovery/all_vect-04.svg"),
        },
      ],
    },
  ],
};


// Medications Content
export const Medications = {
  data: [
    {
      id: 0,
      group: "Antiplatelet Drugs",
      content: [
        {
          genericName:
            "Aspirin, Clopidogrel, Dipyridamole, Prasugrel, Ticagretor",
          medicationUse: ["Used to prevent bllood clots."],
          comments: [
            "Aspirin with food to prevent stomach events.",
            "Report any abnormal bruising or bleeding to your GP.",
            "Combination products are available.",
          ],
        },
      ],
    },
    {
      id: 1,
      group: "New Oral Anticoagulants",
      content: [
        {
          genericName: "Apixaban, Dabigatran, Rivaroaxaban",
          medicationUse: [
            "Used to thin the blood and prevent blood clots whichmay cause a stroke.",
          ],
          comments: [
            "Tell all health care professions (doctors, dentists, pharmacists, paramedics etc.) that you are on this drug, and know why youare taking it.",
            "Report any abnormal bruising or bleeding to your GP.",
            "Follow- up blood tests may be needed with your GP.",
            "Rivaroxaban must be taken with food. Dabigitran and Apixaban can be taken with or without food.",
          ],
        },
      ],
    },
    {
      id: 2,
      group: "Anticoagulants",
      content: [
        {
          genericName: "Warfarin",
          medicationUse: [
            "Used to thin the blood and prevent blood clots whichmay cause a stroke.",
          ],
          comments: [
            "Tell all health care professions that you are on this drug, and know why youare taking it.",
            "It is essential that you know why you are taking warfarin and how thin your blood should be ( your target INR).",
            "Be very familiar with your warfarin booklet and keep it with you at all times.",
            "Always keep your  clinic appointments.",
            "Avoid cranberry juice , grapefruite/ grapefruit juice.",
          ],
        },
      ],
    },
    {
      id: 3,
      group: "Beta- Blockers",
      content: [
        {
          genericName:
            "Atenolol, Bisoprolol, Carvedilol, Labetalol, Metoprolol, Nebicolol, Propranolol, Sotalol",
          medicationUse: [
            "Reduces the workload of the heart by slowing the heart beat.",
            "Some beta-blockers are used to strengthen the contraction of the heart beat.",
          ],
          comments: [
            "Common side effects include cold hands and feet. In a small number of cases difficulty in sleeping and importance may occur. Talk to your GP about any troublesome side effects, as it may be possible to change your medication.",
            "Combination products containing a beta-blocker and a diuretic or a calcium- channel blocker are avilable for the treatment of high blood pressure ",
          ],
        },
      ],
    },
    {
      id: 4,
      group: "Channel Blockers",
      content: [
        {
          genericName: "Ivabradine",
          medicationUse: ["Reduces heart rate and helps prevent angina"],
          comments: [
            "May cause headache, dizziness, blurred or disturbed visions, nausea or upset stomach",
            "Take during meals and avoid grapefruit/grapefruit juice",
          ],
        },
      ],
    },
    {
      id: 5,
      group: "Statins",
      content: [
        {
          genericName:
            "Atorvastatin, Fluvastatin, Pravastatin, Rosuvastatin, Simvastatin",
          medicationUse: [
            "They lower the body's production of cholestrol.",
            "More importantly, they help make plaque in the coronary arteries stronger, and less likely to crack and cause heart attacks.",
          ],
          comments: [
            "Usuallly taken at bedtime as most cholestrol is produced during sleep. Atrovastatin and Rosuvastatin may be taken during daytime.",
            "May cause diarrhoea, constipation, stomach pain and headache but these are usually mild and don't last long.",
            "Report any unexpected muscle pain or weakness to your GP.",
            "Do not take grapefruit/grapefruit juice while taking these tablets",
          ],
        },
      ],
    },
    {
      id: 6,
      group: "ACE Inhibitors",
      content: [
        {
          genericName:
            "Captopril, Cilazapril, Enalapril, Lisinopril, Perindopril, Quinapril, Ramipril",
          medicationUse: [
            "Lowers blood pressure and helps the pumping action of the heart.",
            "These medications decrease the amount of damage done after the attack",
          ],
          comments: [
            "They may cause dizziness, headache and loss of appetite, dry cough or rash",
            "Combination products containing an ACE inhibitor and a diuretic or a calcium - channel blocker are available for the ttreatment of high blood pressure",
          ],
        },
      ],
    },
    {
      id: 7,
      group: "Angiotensin -II antagonists",
      content: [
        {
          genericName:
            "Candesartan, Eprosartan, Irbesartan, Losartan, Olmesartan, Telmisartan, Valsartan",
          medicationUse: ["Similar to ACE Inhibitors"],
          comments: [
            "Similar to ACE Inhibitors but without the associated dry cough",
            "Combination products containing an A - II antagonist and a diuretic or a calcium - channel blocker are available for treatment of high blood pressure",
          ],
        },
      ],
    },
    {
      id: 8,
      group: "Nirates",
      content: [
        {
          genericName:
            "Glyceryl Trinitrate (tablet, spray and patch), Isosorbide Dinitrate, Isosorbide, Mononitrate",
          medicationUse: [
            "They widen the arteries and veins which increase the blood supply to the heart thus helping to prevent (or treat) angina.",
          ],
          comments: [
            "Common side effects include headache, flushing and dizziness,  which generally wear off.",
            "Patches should be applied to a non-hairy part of the chest. They are generally only worn during the day as they become less effective if worn continuously.",
            "The spray is used for immediate relief of angina symptoms.",
            "Do not take VIAGRA or LEVITRA while on nitrates as this combination will cause your blood pressure to drop too much",
          ],
        },
      ],
    },
    {
      id: 9,
      group: "Potassium Channel Activators",
      content: [
        {
          genericName: "Nicorandil",
          medicationUse: [
            "They also widen aarteries and veins and increase the blood supply to the heart, thus helping to prevent angina.",
          ],
          comments: ["They may cause headaches, dizziness and vomiting"],
        },
      ],
    },
    {
      id: 10,
      group: "Diuretics",
      content: [
        {
          genericName:
            "Amiloride, Bendroflumethiazide, Bumetanide, Furosemide, Indapamide, Metolazone",
          medicationUse: [
            "They remove excess fluid from the body, reducing ankle swelling and fluid in the lungs caused by heart failure. They also lower high blood pressure.",
          ],
          comments: [
            "It is best to take these in the morning, as you may need to pass water more frequently.",
            "If you feel faint or dizzy notify your GP.",
            "Spironolactone may be especially effective in preventing worsening of heart failure",
            "Eplerrenone may be especially useful in heart failure patients after a heart attack.",
            "Combination products containing a diuretic and an ACE inhibitor A-II antagonist, beta-blocker or a calcium-channel blocker are available for the treatment of high blood pressure",
          ],
        },
      ],
    },
    {
      id: 11,
      group:
        "Aldosterone Antagonists or Mineral Corticoids Receptor Antagonists (MRAs)",
      content: [
        {
          genericName: "Eplerenone, Spironolactone",
          medicationUse: [
            "Aldosterone antagonists block the actions of a naturally occuring hormone called aldosterone. This helps to improve heart failure and prevent worsening of symptoms.",
          ],
          comments: [
            "Aldosterone antagonists can cause increased potassium levels so regular bloof tests are needed.",
            'Do not use potassium supplements or salt substitutes such as "low-salt".',
            "Contact your GP if you have severe vomitting or diarrhoea or if you are unable to eat or drink , as treatment may need to be stopped temporarily.",
            "Spironolactone can cause breast pain or breat enlargement",
          ],
        },
      ],
    },
    {
      id: 12,
      group: "Calcium -Channel Blockers",
      content: [
        {
          genericName:
            "Amlodipine, Diltiazem, Felodipine, Lercanidipine, Nicardipine, Verapamil",
          medicationUse: [
            "They relax arteries so that blood can flow through them more easily. Used to reduce blood pressure and prevent angina",
          ],
          comments: [
            "Common side effects are headache, nausea, constipation, dizziness and flushing.",
            "Do not take grapefruit/ graprefruit juice while taking these tablets.",
            "Combination products containing a calcium-channel blocker and an ACE inhibitor, A-II antagonist, beta-blocker or a diuretic are available for the treatment of high blood pressure",
          ],
        },
      ],
    },
    {
      id: 13,
      group: "Antianginals",
      content: [
        {
          genericName: "Ranolazine",
          medicationUse: ["Used to prevent chest pain."],
          comments: [
            "They may cause headache, dizziness, constipation nausea or general weakness.",
            "Avoid grapefruit/ grapefruit juice while taking these tablets.",
          ],
        },
      ],
    },
    {
      id: 14,
      group: "Alpha-Blockers",
      content: [
        {
          genericName: "Doxazosin",
          medicationUse: ["Used to lower blood pressure"],
          comments: [
            "They may cause you to feel faint especilly after the first dose. This usually goes away after a few days",
          ],
        },
      ],
    },
    {
      id: 15,
      group: "Fish Oils",
      content: [
        {
          genericName:
            "Omega-3-acid ethyl esters, Omega-3-marine triglycerides",
          medicationUse: [
            "These fish oils can be useful in reducing triglycerides",
          ],
          comments: [
            "They can cause nausea, belching, diarrhoea and constipation.",
          ],
        },
      ],
    },
    {
      id: 16,
      group: "Cholesterol absorption inhibitor",
      content: [
        {
          genericName: "Ezetimibe",
          medicationUse: ["Reduces the absorption of cholesterol from the gut"],
          comments: [
            "It can cause upset stomach, headaches and fatigue.",
            "Report and unexpected muscle pain or weakness to your GP.",
            "A combination product with simvastatin is available",
          ],
        },
      ],
    },
    {
      id: 17,
      group: "Fibrates",
      content: [
        {
          genericName: "Fenofibrate, Gemfibrozil",
          medicationUse: [
            "These reduce a type of fat called triglycerides and can be used alone or with other medications.",
          ],
          comments: [
            "They can cause nausea, gestric pain, impotence, headache dizziness and fatigue.",
            "Report any unexpected muscle pain or weakness to your GP.",
            "A combination product with simvastatin is available.",
          ],
        },
      ],
    },
    {
      id: 18,
      group: "Cardiac Glycosides",
      content: [
        {
          genericName: "Digoxin",
          medicationUse: [
            "Slows the rate of the heart and improves the pumping action of the heart",
          ],
          comments: [
            "Digoxin levels should be checked periodically.",
            "Report rashes, changes in vision, stomach upset or weakness to your GP.",
            "Do not tak grapefruit/ graprefruit juice while taking these tablets.",
          ],
        },
      ],
    },
    {
      id: 19,
      group: "Anti-arrhythmics",
      content: [
        {
          genericName:
            "Amiodarone, Dronedarone, Flecainide, Propafenone, Sotalol",
          medicationUse: ["Used to control an irregular or rapid heartbeat."],
          comments: [
            "All may cause dizziness, light- headness, headaches, nausea or upset initially.",
            "Contact your GP if you develop problems with your vision, a cough, shortness of breath or other breathing difficulties, swelling, tingling or numbness of your hands or feet, unusual tiredness, nightmares, hair loss orchanges in skin colour while using Amiodarone.",
            "Always use sun block while on  Amiodarone or Dronedarone (at least SPF 15).",
            "Do no take grapefruit/ grapefruit juice while taking these tablets.",
            "Dronedarone and Propafenone should be taken with food.",
          ],
        },
      ],
    },
  ],
};
