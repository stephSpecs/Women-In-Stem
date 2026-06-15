const women = [
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    field: 'Mathematics & Computing',
    era: '1840s',
    contribution: 'Wrote the first algorithm intended to be processed by a machine',
    description: 'Ada Lovelace was a 19th-century mathematician who worked with Charles Babbage on his proposed Analytical Engine. She wrote what is considered the first computer program, a century before modern computers existed.',
    fun_fact: 'She predicted that computers could go beyond pure calculation and be used to compose music.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png&width=300'

  },
  {
    id: 'grace-hopper',
    name: 'Grace Hopper',
    field: 'Computer Science',
    era: '1950s–1980s',
    contribution: 'Invented the first compiler and pioneered machine-independent programming languages',
    description: 'Grace Hopper was a US Navy rear admiral and computer scientist who believed programming languages should be readable by humans, not just machines. She developed COBOL, one of the earliest high-level programming languages still in use today.',
    fun_fact: 'She popularized the term "debugging" after her team literally found a moth stuck in a relay of the Harvard Mark II computer.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Grace_Hopper.jpg&width=300'
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    field: 'Mathematics & Aerospace',
    era: '1950s–1980s',
    contribution: 'Calculated orbital mechanics critical to the success of NASA\'s first crewed spaceflights',
    description: 'Katherine Johnson was a mathematician at NASA whose calculations of orbital mechanics were essential to the success of the first US crewed spaceflights. John Glenn refused to fly unless she personally verified the computer\'s numbers.',
    fun_fact: 'She calculated the trajectory for the Apollo 11 mission that landed the first humans on the Moon.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Katherine_Johnson_1983.jpg&width=300'
  },
  {
    id: 'margaret-hamilton',
    name: 'Margaret Hamilton',
    field: 'Software Engineering',
    era: '1960s–1970s',
    contribution: 'Led the development of the onboard flight software for NASA\'s Apollo missions',
    description: 'Margaret Hamilton was the director of software engineering at MIT\'s Instrumentation Laboratory, where she led the team that built the flight software for the Apollo spacecraft. She is credited with coining the term "software engineering."',
    fun_fact: 'Her software saved the Apollo 11 mission — it detected an overload and prioritized critical tasks just minutes before landing on the Moon.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Margaret_Hamilton_1995.jpg&width=300'
  },
  {
    id: 'hedy-lamarr',
    name: 'Hedy Lamarr',
    field: 'Wireless Communication',
    era: '1940s',
    contribution: 'Co-invented frequency-hopping spread spectrum, the foundation of modern WiFi and Bluetooth',
    description: 'Hedy Lamarr was an Austrian-American actress and inventor who, during World War II, co-developed a radio guidance system using frequency-hopping spread spectrum technology to make torpedo signals harder to detect or jam.',
    fun_fact: 'She was a major Hollywood star at the same time — most people had no idea she was also a groundbreaking inventor.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Hedy_Lamarr_-_1940.jpg&width=300'
  },
  {
    id: 'radia-perlman',
    name: 'Radia Perlman',
    field: 'Network Engineering',
    era: '1980s–present',
    contribution: 'Invented the Spanning Tree Protocol, fundamental to how the modern internet works',
    description: 'Radia Perlman is a network engineer and mathematician whose invention of the Spanning Tree Protocol made it possible to build large, reliable networks. Her work laid the groundwork for the modern internet as we know it.',
    fun_fact: 'Despite being called the "Mother of the Internet," she finds the title a bit of an overstatement — but the engineering community disagrees.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Radia_Perlman_2009.jpg&width=300'
  },
  {
    id: 'fei-fei-li',
    name: 'Fei-Fei Li',
    field: 'Artificial Intelligence',
    era: '2000s–present',
    contribution: 'Created ImageNet, the dataset that sparked the modern AI revolution',
    description: 'Fei-Fei Li is a Stanford professor and AI researcher who built ImageNet, a massive labeled image dataset that became the benchmark for computer vision research. Her work directly enabled the deep learning breakthroughs that power modern AI.',
    fun_fact: 'She co-founded AI4ALL, a nonprofit working to increase diversity and inclusion in artificial intelligence.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Fei-Fei_Li_at_AI_for_Good_2017.jpg&width=300'
  },
  {
    id: 'annie-easley',
    name: 'Annie Easley',
    field: 'Computer Science & Aerospace',
    era: '1955–1989',
    contribution: 'Developed software for NASA rocket systems and early hybrid vehicle technology',
    description: 'Annie Easley was a computer scientist and mathematician at NASA who developed and implemented code for the Centaur rocket stage and researched energy conversion systems. She was one of the first African American employees at NASA\'s Lewis Research Center.',
    fun_fact: 'She started at NASA as a "human computer" — doing calculations by hand — before transitioning to programming as computers became standard.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Annie_Easley_1955.jpg&width=300'
  },
  {
    id: 'carol-shaw',
    name: 'Carol Shaw',
    field: 'Computer Science & Game Development',
    era: '1970s–1980s',
    contribution: 'Widely regarded as the first female video game developer',
    description: 'Carol Shaw was a programmer at Atari and later Activision, where she designed and programmed some of the earliest video games. Her game River Raid, released in 1982, was praised for its technical sophistication and went on to sell millions of copies.',
    fun_fact: 'River Raid was banned in West Germany for being "too militaristic" — making it one of the earliest video games to be censored.',
    image: 'https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/Carol_Shaw_2011.jpg&width=300'
  },
  {
    id: 'gladys-west',
    name: 'Gladys West',
    field: 'Mathematics & Geodesy',
    era: '1956–1979',
    contribution: 'Developed the mathematical models that became the foundation of GPS',
    description: 'Gladys West was a mathematician who worked at the US Naval Weapons Laboratory, where she programmed computers to deliver increasingly precise calculations of the Earth\'s shape. Her geodetic models became the foundation of the Global Positioning System (GPS).',
    fun_fact: 'Her contribution to GPS went largely unrecognized for decades — she was only inducted into the Air Force Space and Missile Pioneers Hall of Fame in 2018.',
    image: 'https://static01.nyt.com/images/2026/01/29/obituaries/00west-topper-img-print3/00west-topper-img-master675.jpg&width=300'
  }
];

module.exports = women;