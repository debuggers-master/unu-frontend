export const eventMock = {
  _id: 'ObjectId',
  eventId: '7677',
  organizationId: '0899',
  organizationUrl: 'str', // Generated automatly
  organizationName: 'Space X',
  name: 'Starlink Conf',
  url: 'str',
  startDate: 'str', // Date
  template: 'template01',
  shortDescription:
    'READY FOR THE HARDWIRED EXPERIENCE? OR BUILD YOUR RESUME WITH HARDWIRED ON-DEMAND WORKSHOPS...ON YOUR OWN TIME?',
  description:
    'For the first time in our 29 year history, WE WILL LIVE-STREAM THE CONFERENCE, IN LIEU OF AN ON-SITE CONFERENCE.  As everyone knows by now, COVID-19 has made large gatherings ill advised if not prohibited. But don’t worry! You won’t miss out on meeting new friends or connecting with old ones. With our live-streaming platform, Whova, you can upload your picture and personal information, look for others, join chat rooms, create your own, host a virtual meetup, and even allow the app to match you with like-minded attendees if you choose. As always, when you buy a ticket for the UFO Congress, you are guaranteed access to every lecture – there is no choosing between speakers – and you can even ask them questions! For those of you who want more, we offer Workshops with selected speakers, where you will be able to learn more and ask questions in a smaller group dynamic.',
  imageHeader:
    'http://1.bp.blogspot.com/-hFJx9guArlQ/UwJdxFSjRXI/AAAAAAAAIWg/PaqQzvX9zmg/s1600/shades-of-blue-wallpapers_35201_1280x800.png', // ecoded base64 image
  imageEvent:
    'https://abia.net.au/web/wp-content/uploads/2016/07/conferenceattendees1.jpg', // ecoded base64 image
  localTime: 'UTC-5', // eg. "UTC-5"
  speakers: [
    {
      speakerId: '1234',
      speakerName: 'Nick Pope',
      speakerBio:
        'Nick Pope worked for the UK Ministry of Defense, investigating UFOs and other mysteries officially, for the British Government, leading the media to call him the real Fox Mulder. Because of his work on these real-life X-Files, Nick has worked as consultant or spokesperson on numerous alien-themed movies, TV series and video games. Nick is a regular contributor to various TV news shows and documentaries, including “Tucker Carlson Tonight” and “Ancient Aliens”.',
      twitter: 'https://twitter.com/boblazar',
      rol: 'UFO Investigator',
      speakerPhoto:
        'https://ufocongress.com/wp-content/uploads/2020/06/Nick-Pope-web.jpg'
    },
    {
      speakerId: '12345',
      speakerName: 'Stacey Wright',
      speakerBio:
        'Stacey Wright is the State Director for Arizona MUFON, and also the Director of Phoenix MUFON. Stacey is a certified Field Investigator for MUFON and over the past 13 years, has helped to build the Phoenix MUFON chapter from ground up to become MUFON International’s 2017 Chapter Of The Year.',
      twitter: 'twitter.com/boblazar',
      rol: 'UFO Investigator',
      speakerPhoto:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bob-Lazar.jpg/250px-Bob-Lazar.jpg'
    }
  ],
  agenda: [
    {
      dayId: '0001',
      date: new Date(), // Date
      conferences: [
        {
          conferenceId: '001',
          name: 'UFO Meteology',
          description:
            'With the current focus on the Pentagon’s AATIP program, the US Navy sightings and related issues, the UFO community’s spotlight is understandably on the US. But what’s going on in the UK, where the British government quietly announced the release of further UFO files? And with the US Navy confirming that the term UAP (Unidentified Aerial Phenomena) was “a term we borrowed from the UK”, what of the wider British influence? With UK cases showing up in some of the US paperwork, that influence is bigger than most people realize. Former UK government UFO investigator Nick Pope lifts the lid on this seldom-discussed aspect of the story.',
          startHour: new Date(), // date
          endHour: new Date(), //  date
          speakerName: 'Nick Pope',
          rol: 'UK Ministre of Defense',
          speakerPhoto:
            'https://ufocongress.com/wp-content/uploads/2020/06/Nick-Pope-web.jpg'
        }
      ]
    }
  ],
  associates: [
    {
      name: 'UFO Congresss',
      url: 'https://ufocongress.com/',
      logo:
        'https://ufocongress.com/wp-content/uploads/2019/02/logo_iufoc_460-1.png' // url
    },
    {
      name: 'UFO Congresss',
      url: 'https://ufocongress.com/',
      logo:
        'https://ufocongress.com/wp-content/uploads/2019/02/logo_iufoc_460-1.png' // url
    },
    {
      name: 'UFO Congresss',
      url: 'https://ufocongress.com/',
      logo:
        'https://ufocongress.com/wp-content/uploads/2019/02/logo_iufoc_460-1.png' // url
    }
  ],
  collaborators: [
    {
      userId: '989',
      name: 'Miguel',
      email: 'miguel@gmail.com'
    }
  ],
  publicationStatus: true // True if is accesible to all public
}
