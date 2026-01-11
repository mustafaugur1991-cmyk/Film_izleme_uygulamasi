// --- 1. TÜM FİLM VERİLERİ (İçerikler Aynen Korundu) ---
const movies = [
    { 
        id: 1, 
        title: "Interstellar", 
        category: "Bilim Kurgu", 
        director: "Christopher Nolan",
        production: "2014 Filmleri, ABD, Kanada",
        time: "169 dk", 
        imdb: "8.7", 
        img: "images/afis1.jpg", 
        desc: "Yıldızlararası - Interstellar filminde, dünyanın felaketlere boğulduğu ve su ve kaynakların yok olmak üzere olduğu bir dönemde teknik becerileri ve yetenekleri oldukça iyi olan Cooper, mısır tarlalarında çiftçilik yaparak yaşamını sürdürmektedir. Bütün amacı yok olmanın eşiğinde olan dünyada iki çocuğuna güven ve emniyet içinde bir yaşam sağlayabilmektir.<br> <br> Onlarla yaşayan Büyükbaba Donald çocuklara göz kulak olurken, daha 10 yaşında olan kızı Murph insanı hayretlere düşüren bir zekaya ve altıncı his yeteneğine sahiptir. Geride bıraktığı bilim insanı kariyerini özleyen Cooper'un karşısına geri çevrilmesi oldukça güç bir teklif çıkar. Cooper bu teklifi bir fırsattan ziyade bir görev gibi benimsemiştir. Çünkü Cooper başta ailesinin, sonra da tüm insanlığın emniyetini ve hayatta kalmalarını istemektedir. Bu görevi kabul etmek onun için çok zor bir karar olsa da insanlık adına büyük bir görevin yapılması gerektiği gerçeği onu sorumlu ve mecbur hissettirecek, ekibini toplayıp uzayın sınırsız derinliklerine dalması için harekete geçirecektir.<br> <br> Filmin senaryosu Christopher Nolan'ın ve Jonathan Nolan tarafından kaleme alınmıştır. Yönetmenliğini üstlendiği filmin yıldız oyunculardan oluşan oyuncu kadrosunda Matthew McConaughey, Anne Hathaway, Jessica Chastain, Matt Damon, Bill Irwin, John Lithgow ve Michael Caine gibi isimler de yer almaktadır. Klasik Bilim-kurgunun yanı sıra dram sahneleri de içeren film, Fizikçi Kip S. Thorne'un evrendeki 'Solucan Delikleri' teorisinden ilham alan bir hikayeye sahip.<br> <br> Dilerseniz 1080p Full HD kalitede, dilerseniz de 4k görüntü kalitesiyle izleyebileceğiniz Türkçe adı Yıldızlararası ve İngilizce adı Interstellar olan 2014 yapımı bu filmi en yüksek görüntü kalitesiyle sizlere sunuyoruz. Yıldızlararası - Interstellar film izle.", 
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E" 
    },
    { 
        id: 2, 
        title: "The Matrix", 
        category: "Bilim Kurgu", 
        director: "Lana Wachowski, Lilly Wachowski",
        production: "1999 Filmleri, ABD",
        time: "136 dk", 
        imdb: "8.7", 
        img: "images/afis2.jpg", 
        desc: "Wachowski kardeşlerin (Lana ve Lilly) yönetmenliğini yaptığı ve senaryosunu kaleme aldığı Matrix filmi bilim kurgu ve aksiyon türündedir. Laurence Fishburne, Hugo Weaving, Marcus Chong ve Keanu Reeves’in ana karakterlerini canlandırdığı film sitemizde 4k çözünürlük seçeneği ile seyre sunulmuştur. Ayrıca Full HD 1080p çözünürlük seçeneği de donanım sorunları yaşayan izleyiciler için bulunmaktadır.<br>Yıllarca süren araştırmalardan sonra, Morpheus ve Trinity nihayet, matrix evrenini manipüle etme yeteneğine sahip olan, muhtemelen aradıkları kişi olabilecek bir adam hakkında bilgi bulurlar. Bir diğer direniş üyesi Cypher, önce Matrix'e girer ve aradıkları adamın nerede olduğunu ortaya çıkaran son bilgileri toplamak için Heart O’ The City Hotel'e gider.<br> Film, Trinity'den Cypher'a bir telefonla başlar ve ona adamla karşılaşmaları için her şeyin hazır olup olmadığını sorar. Trinity, görüşmeleri sırasında aramanın izlendiğini fark eder ve hemen telefonu kapatır. Kısa bir süre sonra kolluk kuvvetleri, Trinity'yi, Mega City'de kötü şöhretli bir bilgisayar korsanı olduğu için tutuklamak için otele gelir. Olay yerine üç ajan gelir ve polis teğmenine oteldeki adamlarının çoktan ölmüş olduğunu söyler. Otelin 303 numaralı odasında, polis memurları Trinity'yi tutuklamak için gelir. Ancak Trinity karşı koyar ve hepsini alt eder. Morpheus'u arar ve bir çıkış yolu bulmasını ister. Morpheus, Trinity'ye onun için ajanların geldiğini ve kaçması gerektiğini söyler.<br> Sonunda, Ajan Smith kamyonuyla telefon kulübesinin içinden geçmeden önce bir çıkışa ulaşır ve Matrix'ten ayrılır. Trinity ayrılırken, three ajan birbirleriyle buluşur ve Neo adında bir adamı aradıklarını anlarlar ve onu da aramaya karar verirler.<br> Thomas Anderson, Neo takma adı altında bir bilgisayar korsanı olarak çifte yaşamı sürdürürken bir bilgisayar programcısı olarak çalışmaktadır. Bilgisayarında görünen Matrix'e yapılan şifreli referansların anlamını öğrenmeye kararlıdır ve bu onu huzursuz etmektedir. Kötü şöhretli hacker Trinity, Neo ile temasa geçer ve ona Morpheus adlı bir adamın Matrix'in ne olduğunu söyleyebileceğini söyler, ancak üç ajan, Morpheus ile işbirliği yapmasını engellemek için Neo'yu tutuklar.<br> Neo, Morpheus ile buluşur ve kendisine sunulan iki haptan kırmızı hapı seçerek Matrix hakkında daha fazla bilgi edinmek istediğini onaylar. Hapı yuttuktan sonra Neo, milyonlarca insanla birlikte ayrıntılı bir elektriksel yapıya bağlanan sıvı dolu bir kapta aniden uyanır.<br>", 
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8" 
    },
    { 
        id: 3, 
        title: "Dune: Part Two", 
        category: "Macera", 
        director: "Denis Villeneuve",
        production: "2024 Filmleri, ABD",
        time: "166 dk", 
        imdb: "8.6", 
        img: "images/afis3.jpg", 
        desc: "Paul Atreides, Arrakis gezegeni için mücadeleye devam ediyor ve Fremen halkının liderliğini üstleniyor. Paul, Harkonnen ailesinin saldırısından kurtulduktan sonra, Fremenlerle birlikte yaşamaya başlar. Fremenlerin yardımıyla, Arrakis'in kontrolüne yeniden sahip olmak ve evrenin kaderini değiştirmek için mücadele eder. Paul, Arrakis gezegeninin Fremen halkı tarafından Mesih olarak kabul edilir. Fremen'ler, Paul'ün liderliğinde Arrakis gezegenini özgürleştireceklerine ve galakside eşitlik ve adaleti sağlayacaklarına inanırlar.", 
        trailer: "https://www.youtube.com/embed/Way9Dexny3w" 
    },
    { 
        id: 4, 
        title: "Spider-Man: No Way Home", 
        category: "Bilim Kurgu", 
        director: "Jon Watts",
        production: "2021 Filmleri, ABD",
        time: "148 dk", 
        imdb: "8.2", 
        img: "images/afis4.jpg", 
        desc: "Örümcek-Adam Eve Dönüş Yok, kimliği açığa Örümcek-Adam'ın, sırrını geri vermesi için Doktor Strange'den yardım istemesiyle birlikte yaşananları konu ediyor. Örümcek-Adam'ın kimliği ifşa edilerek onun ve sevdiklerinin hayatı, halkın gözü önüne serilir. Kendisini büyük bir kaosun ortasında bulan Peter, aynı zamanda suç ortakları olarak lanse edilen MJ ve Ned'in hayatının da olumsuz etkilenmesine şahit olur. Arkadaşların üniversiteye girme şanslarının yok olmasına seyirci kalmak istemeyen Peter, sırrını geri vermesi için Doktor Strange'den yardım ister. Peter'ın yakarışından etkilenip ona yardım etmeyi kabul eden Strange, Unutma Büyüsü'nü yapmaya başlar. Ancak bu büyü, MJ, Ned, May ve Happy'nin de Örümcek-Adam'ın kim olduğunu unutmasına neden olacaktır. Arkadaşlarının kim olduğunu hatırlamasını, diğer kişilerin unutmasını isteyen Peter, Strange büyüyü yaparken parametreleri değiştirir. Ancak bu durum beklenmedik olaylara neden olur.", 
        trailer: "https://www.youtube.com/embed/JfVOs4VSpmA" 
    },
    { 
        id: 5, 
        title: "Gladiator", 
        category: "Dram / Aksiyon", 
        director: "Ridley Scott",
        production: "2000 Filmleri, ABD, İngiltere",
        time: "155 dk", 
        imdb: "8.5", 
        img: "images/afis5.jpg", 
        desc: "Roma İmparatorluğu'na en parlak dönemi yaşatan General Maximus, girdiği bir meydan savaşından daha zaferle çıkar, artık tek hayali bir an önce evine dönerek karısı ve ailesine kavuşmaktır. Fakat, zamanın Roma İmparatoru Marcus Aurelius ,Maximus'a önemli bir görev verir ve iktidara sahip çıkmasını ister. Bunun üzerine imparatorun oğlu olan Commodus, iktidarın elinden alınacağını anlayınca general ve ailesini öldürme emri verir. Maximus ölümden zor kurtulur ve gladyatörler arenasına sürgün edilir. Yıllar sonra Roma'ya geri dönen güçlü gladyatör Maximus'un tek amacı Commodus'u öldürerek karısı ve oğlunun katledilmesinin intikamını almaktır.", 
        trailer: "https://www.youtube.com/embed/P5ieIbInFpg" 
    },
    { 
        id: 6, 
        title: "Mad Max: Fury Road", 
        category: "Aksiyon", 
        director: "George Miller",
        production: "2015 Filmleri, Avustralya, ABD",
        time: "120 dk", 
        imdb: "8.1", 
        img: "images/afis6.jpg", 
        desc: "Başrolünde Tom Hardy ve yanında Charlize Theron, Nicholas Hoult gibi isimlerin rol aldığı filmin yönetmenliğini de yapan George Miller yanında Brendan McCharty ve Nick Lathouris ikilisi ile senaryosunu yazmıştır. Merakla ve ilgiyle gelişini takip eden seyircilerle 2015 yılında ekranlara gelerek buluşan Mad Max: Fury Road (Çılgın Max: Öfkeli Yollar) filmi, nükleer savaşın ardından devasa bir çöl haline gelmiş, susuzluğun zirvede olduğu ve aynı sebeplerden dolayı da insanlığın ve yıllar boyunca kurulan medeni anlayışın çöktüğü distopik bir dünyayı ekranlara getiriyor. Hayatta kalma yeteneği ve dürtüsü, yaşadığı hayatından dolayı çok yüksek seviyede olan Max, karısını ve çocuğunu kaybettikten sonra huzuru aramaktadır ancak bir gün Savaş Çocukları tarafından esir alınır ve merkezlerine götürülür. Savaş Çocuklarının olduğu gibi bölgedeki su ve benzin gibi önemli kaynakların kontrolünü elinde tutan Ölümsüz Joe isimli acımasız ve vahşi lider için kan torbası olarak görev gören Max, buradan kaçmanın yollarını arayacaktır.", 
        trailer: "https://www.youtube.com/embed/hEJnMQG9ev8" 
    },
    // --- POPÜLER FİLMLER (7-12) ---
    {   id: 7, 
        title: "Oppenheimer", 
        category: "Dram", 
        director: "Christopher Nolan", 
        production: "2023, ABD", 
        time: "180 dk", 
        imdb: "8.4", 
        img: "images/afis7.jpg", 
        desc: "J. Robert Oppenheimer, II. Dünya Savaşı sırasında gerçekleştirilen Manhattan Projesi'nde yer alan Los Alamos Laboratuvarı'nda çalışmalar yürüten bir teorik fizikçiydi. Bu projenin amacı, dünyanın ilk nükleer silahını üretmekti ve Oppenheimer, bu hedefi gerçekleştirmedeki önemli bir rol oynadı.Oppenheimer, bilim dünyasında büyük bir prestije sahip olan bir isimdi ve atom bombasının icat edilmesindeki liderlerden biriydi. Ta ki kendisi, bu proje üzerinde çalışırken trajik bir biçimde gölgede kalan bir figür haline gelene kadar. Projenin sonucunda Hiroşima ve Nagazaki'ye atılan atom bombaları, dünya tarihinde görülmemiş bir yıkıma ve insanlık için büyük bir felakete neden oldu.Oppenheimer, bu durumun farkına varır varmaz, kendi rolleri ve sorumlulukları hakkında derin bir iç hesaplaşmaya girdi. Atom bombasının icadı ve kullanılması konusunda büyük bir vicdani yük taşıyan Oppenheimer, zamanla pişmanlık ve üzüntü duydu.<br><br>Oppenheimer'ın Manhattan Projesi'ndeki rolü ve sonrasında yaşadığı bu iç hesaplaşma, onu insanlık dışı bir silahın yaratıcısı olarak tanımladı. Oysaki Oppenheimer, başlangıçta bilimsel araştırmalar yapmak amacıyla projeye katılmıştı ve nükleer enerjinin barışçıl kullanımı hakkında umutlar taşıyordu.Ancak, II. Dünya Savaşı'nın etkisiyle proje, korkunç bir silah üretme amaçlı bir hedefe dönüştü. İnsanlık tarihindeki en büyük felaketlerden biri olan Hiroşima ve Nagazaki bombalamalarının ardından, Oppenheimer artık atom enerjisinin tehlikeleri konusunda uyarılarda bulunuyordu.<br><br>Oppenheimer'ın Manhattan Projesi'ndeki rolü, bilimin gücünün insanlığın geleceğini şekillendirmede ne kadar büyük bir etkiye sahip olabileceğini göstermiştir. Bu deneyim, bilim insanlarının sorumluluklarını ve hangi amaçlar için çalıştıklarını önemli bir şekilde vurgulamıştır.Sonuç olarak, Oppenheimer'ın Manhattan Projesi'ndeki rolü, insanlık tarihine damga vuran bir olaydır. Atom bombasının icadı ve kullanılması, dünyayı değiştiren bir dönüm noktası olmuştur. Bu olay, bilimin gücünün yanı sıra insanın vicdani sorumluluğunu ve etik değerlerini de sorgulamamıza neden olmuştur.", 
        trailer: "https://www.youtube.com/embed/uYPbbksJxIg" 
    },
    {   id: 8, 
        title: "Inception", 
        category: "Bilim Kurgu", 
        director: "Christopher Nolan", 
        production: "2010, ABD", 
        time: "148 dk", 
        imdb: "8.8", 
        img: "images/afis8.jpg", 
        desc: "Dom Cobb (Leonardo DiCaprio) çok yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmak ve onları çalmaktır. Cobb’un bu ender mahareti, onu kurumsal casusluğun tehlikeli yeni dünyasında aranan bir oyuncu yapmıştır. Ancak, aynı zamanda bu durum onu uluslararası bir kaçak yapmış ve sevdiği herşeye malolmuştur. Cobb’a içinde bulunduğu durumdan kurtulmasını sağlayacak bir fırsat sunulur. Ona hayatını geri verebilecek son bir iş; tabi eğer imkansız “başlangıç”ı tamamlayabilirse. Mükemmel soygun yerine, Cobb ve takımındaki profesyoneller bu sefer tam tersini yapmak zorundadır; görevleri bir fikri çalmak değil onu yerleştirmektir. Eğer başarırlarsa, mükemmel suç bu olacaktır. Ama ne dikkatle yapılan planlamalar, ne de uzmanlıkları, onları, her hareketlerini önceden tahmin ettiği anlaşılan tehlikeli düşmanlarına karşı hazırlıklı kılabilir. Bu, gelişini sadece Cobb’un görebildiği bir düşmandır.", 
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0" 
    },
    {   id: 9, 
        title: "The Dark Knight", 
        category: "Aksiyon", 
        director: "Christopher Nolan", 
        production: "2008, ABD", 
        time: "152 dk", imdb: "9.0", 
        img: "images/afis9.jpg", 
        desc: "Kara Şövalye, halk için büyük bir tehdit oluşturan Joker’in ortaya çıkması ile kaosa dönen Gotham Sokakları’nın yeniden kurtarıcılığını üstlenen Batman’in hikayesini konu ediyor. Suç işleyenlerden arındırılan bir yer, bir zaman sonra yeniden tehdit altında kalabilir ve işte o zaman yeniden kolları sıvayacak olanların mücadelesi de daha keskin olarak hayata geçecektir. Batman, Teğmen Gordon ve Savcı Harvey Dent bir araya gelerek Gotham Sokakları’nda bu işi kotarmış olsalar da ansızın ortaya çıkan Joker, işleri fena halde bozar. Onun dehası ile baş etmek kolay olmayacaktır. Gotham eski karmaşa dolu günlerin eşiğindedir. Batman yeniden kurtarıcılığa soyunurken kendi varlığının bulduğu anlamı da sorgulamaya başlar. O aslında suçluların sayısını azaltıyor mudur yoksa çoğaltıyor mudur bunu gerçekten anlamak isteyecektir.", 
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY" 
    },
    {   id: 10, 
        title: "Joker", 
        category: "Dram", 
        director: "Todd Phillips", 
        production: "2019, ABD", 
        time: "122 dk", 
        imdb: "8.4", 
        img: "images/afis10.jpg", 
        desc: "Joker, başarısız bir komedyen olan Arthur Fleck'in hayatına odaklanıyor. Toplum tarafından dışlanan bir adam olan Arthur, hayatta yapayalnızdır. Sürekli bir bağ kurma arayışında olan Arthur, yaşamını taktığı iki maske ile geçirir. Gündüzleri, geçimini sağlamak için palyaço maskesini yüzüne takan Arthur, geceleri ise asla üzerinden silip atamayacağı bir maske takar. Babasız büyüyen Arthur’u en yakın arkadaşı olan annesi Happy adıyla çağırır. Bu lakap, Arthur’un içindeki acıyı gizlemesine yardımcı olur. Ancak maruz kaldığı zorbalıklar, onun gitgide toluma aykırı bir adam haline gelmesine neden olur. Yavaş yavaş psikolojik olarak tekinsiz sulara yelken açılan Arthur, bir süre sonra kendisini Gotham Şehri’nde suç ve kaosun içinde bulur. Arthur, zamanla kendi kimliğinden uzaklaşıp Joker karakterine bürünür.", 
        trailer: "https://www.youtube.com/embed/zAGVQLHvwOY" 
    },
    {   id: 11, 
        title: "Avatar 2", 
        category: "Macera", 
        director: "James Cameron", 
        production: "2022, ABD", 
        time: "192 dk", imdb: "7.6", 
        img: "images/afis11.jpg", 
        desc: "James Cameron’ın Pandora dünyasına geri döndüğü duygu yüklü aksiyon-macera filmi “Avatar: The Way of Water” yeni zirvelere ulaşıyor ve saklı kalmış derinlikleri keşfediyor. İlk filmdeki olayların yaklaşık on yıl sonrasında geçen “Avatar: The Way Of Water”da Sully ailesinin (Jake, Neytiri ve çocukları) hikayesi, peşlerini bırakmayan sorunlar, birbirlerini korumak için yaptıkları, hayatta kalmak için verdikleri mücadeleler ve katlandıkları trajediler anlatılıyor. Tüm hikaye, izleyicilerin yeni Na’vi kültürleri ve egzotik deniz canlılarıyla tanıştıkları Pandora’nın nefes kesici atmosferinde geçiyor. En İyi Film dahil olmak üzere çok sayıda Academy Awards® adaylığı olan, James Cameron’ın yönetmenliğindeki film tüm zamanların en çok hasılat yapan üçüncü filmi oldu ve görsel efektler açısından yeni standartları belirledi. Yapımcılığını Cameron ve uzun süredir ortağı olan Jon Landau’nun üstlendiği Lightstorm Entertainment yapımında başrolleri Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang, Cliff Curtis ve Kate Winslet paylaşıyor. Bu etkileyici oyuncu kadrosunda Britain Dalton, Jamie Flatters, Trinity Jo-Li Bliss, Bailey Bass ve Jack Champion gibi yetenekli yeni oyuncular da yer alıyor.", 
        trailer: "https://www.youtube.com/embed/d9MyW72ELq0" 
    },
    {   id: 12, 
        title: "Fight Club", 
        category: "Dram / Aksiyon", 
        director: "David Fincher", 
        production: "1999, ABD, Almanya", 
        time: "139 dk", 
        imdb: "8.8", 
        img: "images/afis12.jpg", 
        desc: "Dövüş Kulübü'nün ilk kuralı, dövüş kulübü hakkında konuşmamaktır. Dövüş kulübünün ikinci kuralı da kulüp hakkında konuşmamaktır. Filmin baş kahramanı Jack, sıradan ve monoton bir yaşam süren bir sigorta müfettişi olarak karşımıza çıkar. Jack, hayatında anlam bulmakta zorlanırken sürekli depresyon ve uykusuzluk sorunlarıyla boğuşur. Kanseri olmadığı halde, uykusuzluğunu yenmek ve kendisine moral bulmak adına kanserli hastalara moral destek veren terapi gruplarına katılmaya başlar. Bu terapi gruplarından birinde, Marla Singer adlı gizemli ve asi bir kadınla tanışır. Marla ile olan ilişkisi oldukça karmaşık ve tuhaf bir hal alır.<br><br>Bir iş gezisi dönüşünde ise Jack'in hayatı tamamen değişir; Tyler Durden adında karizmatik ve sıradışı bir adamla tanışır. Tyler, Jack'in olmak isteyip de bir türlü olamadığı özgüvenli ve maceraperest bir karakterdir. Tyler'ın cesur ve radikal fikirleriyle Jack'in hayatına heyecan ve kaos katılır. Tyler'ın önderliğinde, yeraltında gizli bir dövüş kulübü kurarlar. Bu dövüş kulübü, Jack'in monoton hayatında yeni bir pencere açar ve ona hiç tatmadığı bir özgürlük ve adrenalin hissettirir. Dövüş kulübü kısa sürede popülerlik kazanarak, Jack'in hayatını tamamen dönüştürür.<br><br>Ancak bu yeni dünyada Marla da yer alır ve olaylar daha karmaşık bir hal almaya başlar. Marla'nın da hayatının bir parçası olduğu bu yeni düzen, Jack'in kafasında birçok soru işareti doğurur. En büyük soru ise Tyler Durden'ın gerçekte kim olduğudur. Tyler, sadece bir dost mu, yoksa Jack'in hayatında çok daha derin bir rol mü oynamaktadır? Bu sorularla birlikte film, izleyiciyi gerilim dolu ve sürükleyici bir hikayenin içine çeker.", 
        trailer: "https://www.youtube.com/embed/qtRKdVHc-cE"
    },

    // --- VİZYONDAKİ FİLMLER (13-18) ---
    {   id: 13, 
        title: "Deadpool & Wolverine", 
        category: "Aksiyon", 
        director: "Shawn Levy", 
        production: "2024, ABD", 
        time: "127 dk", 
        imdb: "7.9", 
        img: "images/afis13.jpg", 
        desc: "Deadpool ve Wolverine, büyük bir tehlikeye karşı Wolverine'i ikna ederek onunla birlikte savaşan Deadpool'un hikayesini konu ediyor. Wade Wilson’ın bir paralı asker olarak geçirdiği günler ve Deadpool kimliği artık geride kalmıştır. O şimdi sivil hayatta varlık göstermek için çabalar. Wade, yeni hayatına alışmaya çalışırken, büyük bir tehlike ile karşı karşıya kalınca harekete geçmek zorunda kalır. Ancak bu tehlike ile tek başına baş etmesi zordur. Bu yüzden Wade en az kendisi kadar isteksiz olan Wolverine'i yardım etmesi için ikna etmeye çalışır. ", 
        trailer: "https://www.youtube.com/embed/73_1biulkYk" 
    },
    { id: 14, 
        title: "Spider-Man: Across the Spider-Verse", 
        category: "Animasyon / Aksiyon", 
        director: "Joaquim Dos Santos", 
        production: "2023, ABD", 
        time: "140 dk", 
        imdb: "8.6", 
        img: "images/afis14.jpg", 
        desc: "Spider-Man: Across the Spider-Verse filmi, Miles Morales'in radyoaktif bir örümcek tarafından ısırılması sonucu elde ettiği özel yeteneklerle başka bir dünyaya adım atmasını ve bu dünyada yaşadığı maceraları anlatıyor. Miles, bir öğrenci olarak sıradan bir hayat yaşarken, örümcek ısırığıyla birlikte kendisini dönüştüren harika güçlere sahip olur.<br><br>Bu yeni dünyada, Miles diğer büyük süper kahramanların yanı sıra farklı Spider-Man versiyonlarıyla da karşılaşır. Onlarla bir araya gelirken, farklı evrenlerde yaşayan bu kahramanlar arasındaki benzerlikleri ve farklılıkları keşfeder. Bu, Miles'in kendini daha da geliştirmesi ve gerçek potansiyelini ortaya çıkarması için büyük bir fırsat sunar.<br><br>Ancak, Miles'in karşılaştığı tehlikeler yalnızca yeni dünyasında değil, aynı zamanda kendi dünyasında da onu beklemektedir. Sahip olduğu güçlerle başa çıkmak ve sorumluluklarını yerine getirmek arasında denge kurmaya çalışırken, Miles gerçek bir kahraman olmanın ne demek olduğunu keşfeder.<br><br>", 
        trailer: "https://www.youtube.com/embed/shW9i6k8cB0" 
    },
    {   id: 15, 
        title: "The Prestige", 
        category: "Gizem / Dram", 
        director: "Christopher Nolan", 
        production: "2006, ABD, İngiltere", 
        time: "130 dk", 
        imdb: "8.5", 
        img: "images/afis15.jpg", 
        desc: "Bir zamanlar londra şehrinde sihirbazlar herkes tarafından saygın ve parmakla gösterilirken iki genç arkadaş bu işe merak sarar ve kendi çaplarında sihirbazlık yapmaktadırlar. Artık show yapmaya başlar ve sahne alırlar seyircileri yaptıkları gösterilerle çok etkilemektedirler. Sonrasında en büyük sihire sıra gelir ve işler ters gider bu iki arkadaş birbirleriyle tartışıp yollarını ayırıp düşman olup sürekli birbirleriyle savaşacaklardır.19. yüzyıl Londra'sında, iki yetenekli sihirbaz olan Robert Angier ve Alfred Borden, bir sahne kazasından sonra birbirlerine ezeli düşman olurlar. Birbirlerinin sırlarını çözmek ve en iyi sihirbaz olmak için giriştikleri bu rekabet, zamanla takıntıya dönüşür. Christopher Nolan'ın ustalıkla kurguladığı film, izleyiciyi son ana kadar merak içinde bırakan ve şaşırtıcı finaliyle akıllarda yer eden bir başyapıttır.", 
        trailer: "https://www.youtube.com/embed/o4gHCmTQDVI"
    },
    {   id: 16, 
        title: "Parasite", 
        category: "Dram / Gerilim", 
        director: "Bong Joon-ho", 
        production: "2019, Güney Kore", 
        time: "132 dk", 
        imdb: "8.5", 
        img: "images/afis16.jpg", 
        desc: "Kim-woo Kim, Güney Kore’deki isimsiz bir şehrin kenar mahallesinde ailesi ile beraber yoksulluk içinde yaşamaktadır. Bir gün Kim-woo’nun varlıklı arkadaşı Min-hyuk, aileyi ziyarete gelir ve hediye olarak elinde bulundurana şans ve zenginlik getirdiğine inanılan bir taş getirir. Aynı zamanda ailenin kızı Ki-jung’a aşık olan Min-hyuk, onu üniversitede başka erkeklerden uzak tutması için Kim-woo ile anlaşır. Bir iş görüşmesine de yönlendirilen Kim-woo ve ailesinin hayatı değişmek üzeredir. Parasite, birbirlerine benzeyen ama farklı görünen iki ailenin aracılığı ile günümüz insanlarının nasıl yaşadığını konu almaktadır.", 
        trailer: "https://www.youtube.com/embed/CMvEWm5FYHc" 
    },
    {   id: 17, 
        title: "Furiosa", 
        category: "Aksiyon", 
        director: "George Miller", 
        production: "2024, ABD", 
        time: "148 dk", 
        imdb: "7.6", 
        img: "images/afis17.jpg", 
        desc: "Yaşadıklarından sonra güçlü bir savaşçıya dönüşen Furiosa’nın hikayesini konu ediyor. Dünya çökerken Nice Annelerin Yeşil Diyarı'ndan kaçırılan genç Furiosa, Savaş Lordu Dementus liderliğindeki büyük bir Motorcu Sürüsü'nün eline düşer. Çorak Topraklar’da ilerleyen Furiosa, bu sırada  Ölümsüz Joe'nun başkanlık ettiği Kale'ye rastlar. İki diktatör egemenlik için savaşırken, Furiosa hem eve dönmenin yolunu bulmak için gereken araçları bir araya getirmek hem de karşılaştığı birçok sınavdan sağ çıkmak için zorlu bir mücadeleye girişir.",
        trailer: "https://www.youtube.com/embed/XJMuhwVlca4" 
    },
    {   id: 18, 
        title: "Dune: Part One", 
        category: "Bilim Kurgu", 
        director: "Denis Villeneuve", 
        production: "2021, ABD", 
        time: "155 dk", 
        imdb: "8.0", 
        img: "images/afis18.jpg", 
        desc: "Bir soylu ailenin oğlu, halkının geleceğini güvence altına almak için tehlikeli bir gezegene seyahat eder, etkileyici bir bilim kurgu destanı.", 
        trailer: "https://www.youtube.com/embed/n9xhJrPXop4" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list'); 
    const popularList = document.getElementById('popular-movie-list');
    const theatersList = document.getElementById('movies-in-theaters');
    const movieDetail = document.getElementById('movie-detail');
    const favList = document.getElementById('fav-list');

    // Standart Kart Şablonu (Ana Sayfa)
    const renderCard = (movie) => `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"> 
            <div class="card h-100 border-0 shadow bg-dark text-white" onclick="goToDetail(${movie.id})" style="cursor: pointer;">
                <img src="${movie.img}" class="card-img-top movie-img" alt="${movie.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate" style="font-size: 0.85rem;">${movie.title}</h5>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="badge bg-warning text-dark" style="font-size: 0.7rem;">★ ${movie.imdb}</span>
                        <small class="text-white-50" style="font-size: 0.65rem;">${movie.category}</small>
                    </div>
                </div>
            </div>
        </div>`;

    // Dağıtım Mantığı
    if (movieList) {
        movies.slice(0, 6).forEach(movie => movieList.innerHTML += renderCard(movie));
    }
    if (popularList) {
        movies.slice(6, 12).forEach(movie => popularList.innerHTML += renderCard(movie));
    }
    if (theatersList) {
        movies.slice(12, 18).forEach(movie => theatersList.innerHTML += renderCard(movie));
    }

    // Detay Sayfası Tasarımı
    if (movieDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get('id');
        const movie = movies.find(m => m.id == movieId);

        if (movie) {
            movieDetail.innerHTML = `
                <div class="card border-0 shadow-lg p-4" style="color: #506B7D; background-color: #F3F8F9; font-size: 16px;">
                    <div class="d-flex justify-content-between align-items-center pb-3 mb-4">
                        <h1 class="h2 mb-0">${movie.title}</h1>
                        <div class="d-flex gap-2">
                            <span class="badge text-white p-2" style="background-color: #C89E1E">IMDB ${movie.imdb}</span>
                            <span class="badge bg-danger p-2" style="color: #ffff">FHD 9.6</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-lg-3">
                            <div class="position-relative shadow rounded overflow-hidden mb-3">
                                <img src="${movie.img}" class="img-fluid w-100" alt="${movie.title}">
                                <span class="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-2 m-2 small">${movie.time}</span>
                            </div>
                            <button class="btn btn-secondary w-100 fw-bold shadow-sm py-2 mb-3" onclick="window.scrollTo(0,document.body.scrollHeight)">Fragmanı İzle</button>
                            <button class="btn btn-outline-danger w-100 fw-bold py-2" onclick="addToFavorites(${movie.id})">❤ Favorilere Ekle</button>
                        </div>
                        <div class="col-md-8 col-lg-9">
                            <p class="lead lh-base mb-4 movie-description" style="height: 360px; background-color: #EAF0F1;">
                                ${movie.desc}
                            </p>
                            <ul class="list-group list-group-flush bg-transparent">
                                <li class="list-group-item bg-transparent text-secondary border-secondary px-0">
                                    <span class="text-secondary fw-bold">Yönetmen:</span> <a href="#" class="text-dark text-info text-decoration-none fw-bold">${movie.director}</a>
                                </li>
                                <li class="list-group-item bg-transparent text-secondary border-secondary px-0">
                                    <span class="text-secondary fw-bold">Kategori:</span> <span class="text-dark text-info fw-bold">${movie.category}</span>
                                </li>
                                <li class="list-group-item bg-transparent text-secondary border-secondary px-0">
                                    <span class="text-secondary fw-bold">Yapım:</span> ${movie.production}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12">
                            <h4 class="mb-3 border-start border-danger border-4 ps-2" style="color: #506B7D">Film Fragmanı</h4>
                            <div class="ratio ratio-16x9 shadow rounded border border-secondary overflow-hidden bg-black">
                                <iframe src="${movie.trailer}" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 text-center">
                        <a href="index.html" class="btn btn-sm btn-outline-secondary">← Listeye Geri Dön</a>
                    </div>
                </div>`;
        }
    }

    // --- FAVORİLER SAYFASI (Kaldır Butonu Eklenmiş) ---
    if (favList) {
        const favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
        const favMovies = movies.filter(movie => favorites.includes(movie.id));
        favList.innerHTML = ""; 

        if (favMovies.length === 0) {
            favList.innerHTML = `<div class="col-12 text-center mt-5"><h4 class="text-white-50">Favori listeniz boş.</h4></div>`;
        } else {
            favMovies.forEach(movie => {
                favList.innerHTML += `
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"> 
                        <div class="card h-100 border-0 shadow bg-dark text-white" onclick="goToDetail(${movie.id})" style="cursor: pointer;">
                            <img src="${movie.img}" class="card-img-top movie-img" alt="${movie.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-truncate" style="font-size: 0.85rem;">${movie.title}</h5>
                                <div class="mt-auto">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <span class="badge bg-warning text-dark" style="font-size: 0.7rem;">★ ${movie.imdb}</span>
                                    </div>
                                    <button class="btn btn-danger btn-sm w-100 fw-bold" 
                                        onclick="event.stopPropagation(); removeFromFav(${movie.id})">
                                        Kaldır
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });
        }
    }
});

// --- TÜM FİLMLER SAYFASI LİSTELEME ---
const allMoviesList = document.getElementById('all-movies-list');

if (allMoviesList) {
    allMoviesList.innerHTML = ""; // Sayfa temizliği
    
    // slice kullanmıyoruz, çünkü movies dizisindeki 18 içeriğin tamamını istiyoruz
    movies.forEach(movie => {
        allMoviesList.innerHTML += `
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"> 
                <div class="card h-100 border-0 shadow bg-dark text-white" onclick="goToDetail(${movie.id})" style="cursor: pointer;">
                    <img src="${movie.img}" class="card-img-top movie-img" alt="${movie.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate" style="font-size: 0.85rem;">${movie.title}</h5>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <span class="badge bg-warning text-dark" style="font-size: 0.7rem;">★ ${movie.imdb}</span>
                            <small class="text-white-50" style="font-size: 0.65rem;">${movie.category}</small>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}   

// YARDIMCI FONKSİYONLAR
function goToDetail(id) { window.location.href = `product.html?id=${id}`; }

function addToFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favMovies', JSON.stringify(favorites));
        alert("Favorilere başarıyla eklendi!");
    } else { alert("Bu film zaten listenizde bulunuyor."); }
}

function removeFromFav(id) {
    let favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
    favorites = favorites.filter(fid => fid !== id);
    localStorage.setItem('favMovies', JSON.stringify(favorites));
    location.reload();
}
