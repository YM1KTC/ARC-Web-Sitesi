---
title: 'Cep Telefonundan APRS : APRSDroid'
date: 2025-04-28 21:31:46
author: TA1SPH
categories: ['Mobil ve Dijital Uygulamalar']
tags: ['android aprs', 'aprs', 'aprs Thursday', 'aprsdroid', 'mobil aprs kullanımı']
layout: post
image: ~/assets/images/2025/04/APRSDroid-Android-Cihazlarda-APRS-Kullanimi.png
---

## **APRSDroid: Android Cihazlarda APRS Kullanımı**

APRS (Automatic Packet Reporting System), amatör telsizcilerin konum, mesaj ve telemetri bilgilerini dijital olarak iletmesini sağlayan bir sistemdir. Android kullanıcıları için en popüler APRS istemcilerinden biri olan **APRSDroid**, bu işlevleri kolay ve taşınabilir bir şekilde gerçekleştirmeye olanak tanır. Bu makalede, APRSDroid’in nasıl indirileceği, kurulacağı ve temel ayarlarının nasıl yapılacağı detaylı bir şekilde ele alınacaktır. Ayrıca, amatör telsizcilerin her hafta Perşembe günü düzenlenen **APRS Thursday** etkinliğine nasıl mesaj gönderebileceğini açıklayacağız.

### **APRSDroid Uygulamasını İndirme**

**APRSDroid**, aşağıdaki iki kaynaktan edinilebilir. Uygulama geliştiricileri tarafından bağış yapmak isteyen kullanıcılar için **Google Play Store**’da ücretli olarak paylaşılmıştır (**Şekil 1**). 19.03.2005 tarihindeki güncel ücreti 12,99 TL’dir Siz de bağış yapmak isterseniz buradan indirip kurabilir veya ücretsiz sürümünü resmi web sitesinden cihazınıza indirip kurabilirsiniz. Her iki yöntemde de aynı versiyon kurulacaktır. Herhangi bir kısıtlama söz konusu değildir.

[caption id="attachment_351" align="alignnone" width="472"]![Şekil 1 - Google Play Store dan APRSDroid indir.](/assets/images/2025/04/Sekil-1-472x1024.jpeg) Şekil 1 - Google Play Store dan APRSDroid indir.[/caption]

Cihazınızın web tarayıcısı ile aprsdroid.org sitesine girin ve “**_download the APK_**” linkine tıklayıp indirme kısmına geçin. (**Şekil 2**)

[caption id="attachment_352" align="alignnone" width="472"]![Şekil 2 - aprsdroid.org Ana Sayfa](/assets/images/2025/04/Sekil-2-472x1024.jpeg) Şekil 2 - aprsdroid.org Ana Sayfa[/caption]

Listenin en alt kısmında yer alan “**_APRSdroid-current.apk_**” dosyasını cihazınıza indirin. Burada hata ile karşılaşırsanız, bir üst sırada yer alan dosyayı da indirebilirsiniz. Karşılaşacağınız hataların ekran görüntüsünü [Amatör Telsizci Telegram](https://t.me/amatortelsizci/1) Grubundan paylaşırsanız sorunu çözmeye yardımcı oluruz. (**Şekil 3**)

[caption id="attachment_357" align="alignnone" width="576"]![APRSDroid Download Page](/assets/images/2025/04/Sekil-3-e1745853692994-576x1024.jpeg) Şekil 3 - aprsdroid.org/download sayfası[/caption]

İndirilen APK dosyasını çalıştırıp kurulumu başlatın. (**Şekil 4**)

[caption id="attachment_358" align="alignnone" width="472"]![APRSDroid kurulum ekranı](/assets/images/2025/04/Sekil-4-472x1024.jpeg) Şekil 4 - APRSDroid kurulum ekranı[/caption]

Bu sırada **_Android_** uygulama **_Play Store’dan_** indirilmediği için güvenlikle ilgili bazı uyarılarda bulunup sizden cihazınızın ayarlar kısmından onaylamanızı isteyecektir.

[caption id="attachment_359" align="alignnone" width="461"]![Şekil 5 - Güvenlik Uyarısı](/assets/images/2025/04/Sekil-5-461x1024.jpeg) Şekil 5 - Güvenlik Uyarısı[/caption]

Gerekli ayarlamaları yaptıktan sonra kurulum sorunsuz bir şekilde bitecektir.

[caption id="attachment_360" align="alignnone" width="461"]![Şekil 6 - Güvenlik Uyarısı Onaylama](/assets/images/2025/04/Sekil-6-461x1024.jpeg) Şekil 6 - Güvenlik Uyarısı Onaylama[/caption]

###

### **Uygulamanın İlk Çalıştırılması ve Temel Ayarlar**

Burada tüm ayarlar tek tek anlatılmayacaktır. Sadece uygulamayı kullanmak için ihtiyacımız olan kısımları anlatılacaktır. **APRSDroid** ilk açıldığında karşımıza çıkacak olan ilk ekranda bazı temel bilgileri girmeniz gerekir. (**_Şekil 7_**) Bu uygulama için **\*APRS-IS** **Şifresi\*** gerekmektedir. İlk olarak çağrı işaretinizi büyük harflerle giriş yapın, daha sonrasında **_APRS-IS_** şifresi oluşturup bu kısma yazdıktan sonra TAMAM’a tıklayın. Uygulama çalışmaya başlayacaktır. (**_Şekil 7_**)

[caption id="attachment_361" align="alignnone" width="461"]![Şekil 7 - APRS-IS Şifre Ekranı](/assets/images/2025/04/Sekil-7-461x1024.jpeg) Şekil 7 - APRS-IS Şifre Ekranı[/caption]

Şifreyi [https://apps.magicbug.co.uk/passcode/](https://apps.magicbug.co.uk/passcode/) sitesinden kolayca oluşturabilirsiniz. Dikkat etmeniz gereken tek şey, hatalı çağrı işareti girişi yapılırsa APRSDroid tarafından cihazınız engellenir ve bir daha uygulamayı kuramazsınız. Çağrı işaretinizi doğru yazdığınızdan emin olun. (**_Şekil 8_**)

[caption id="attachment_365" align="alignnone" width="1024"]![Şekil 8 - Aprs Passcode Generator](/assets/images/2025/04/Sekil-8-1-1024x536.jpg) Şekil 8 - Aprs Passcode Generator[/caption]

“**_Çağrı işaretinizi girin_**” kutucuğuna çağrı işaretinizi SSID olmadan giriş yapın. Bu sizin, aprs.fi haritasında görünecek olan çağrı işaretinizdir. (**_Şekil 9_**)

[caption id="attachment_366" align="alignnone" width="472"]![Şekil 9](/assets/images/2025/04/Sekil-9-472x1024.jpeg) Şekil 9[/caption]

“**_SSID_**” kutucuğunda **_9: Mobil İstasyon_** seçimi yapılacak. Burada APRS’yi internet üzerinden kullandığımız için seçtik ve [**aprs.fi**](http://aprs.fi) sitesinde mobil olarak çağrı işareti-9 şeklinde bir gösterim olacaktır. (**_Şekil 10_**)

[caption id="attachment_367" align="alignnone" width="472"]![Şekil 10 - SSID](/assets/images/2025/04/Sekil-10-472x1024.jpeg) Şekil 10 - SSID[/caption]

“**_APRS digi path_**” bölümü **_WIDE1-1_** olarak kalacak, değişiklik yapılmayacak. (**_Şekil 11_**)

[caption id="attachment_368" align="alignnone" width="472"]![Şekil11 - APRS digi path](/assets/images/2025/04/Sekil-11-472x1024.jpeg) Şekil11 - APRS digi path[/caption]

“_Bağlantı Tercihleri_” bölümünde “_Bağlantı Protokolü_” **_Internet APRS-IS_** olarak kalacak. (**_Şekil 12_**)

[caption id="attachment_369" align="alignnone" width="472"]![Şekil12 - Bağlantı Protokolü](/assets/images/2025/04/Sekil-12-472x1024.jpeg) Şekil12 - Bağlantı Protokolü[/caption]

“_APRS Simgesi_” bölümünde istediğiniz simgeyi seçebilirsiniz. Bu simge yine [**_aprs.fi_**](http://aprs.fi) haritasında sizin görünen simgeniz olacaktır.(**_Şekil 13_**)

[caption id="attachment_370" align="alignnone" width="472"]![Şekil13 - APRS Simgesi](/assets/images/2025/04/Sekil-13-472x1024.jpeg) Şekil13 - APRS Simgesi[/caption]

“_Yorum Alanı_” bölümüne girdiğinizde “_Pozisyonunuzla birlikte gönderilecek ek bilgi giriniz_” (**_Şekil 14_**) şeklinde sizden[**_ aprs.fi_**](http://aprs.fi) haritasında (**_Şekil 15_**) görünecek bir yorum, imza girişi isteyecektir. Burası kişiseldir. İstediğiniz herhangi bir anlamlı ifadeyi girebilirsiniz. Örnek aşağıdaki görsellerde mevcuttur.

[caption id="attachment_371" align="alignnone" width="472"]![Şekil 14 - Yorum Alanı](/assets/images/2025/04/Sekil-14-472x1024.jpeg) Şekil 14 - Yorum Alanı[/caption]

Örnek aprs.fi haritası görünümü.

[caption id="attachment_372" align="alignnone" width="949"]![Şekil 15](/assets/images/2025/04/Sekil-15.jpg) Şekil 15[/caption]

Son olarak “_Konum Ayarları_” bölümüne, “_Konum Bilgi Kaynağı_” seçeneği **_SmartBeaconing ile Pozisyon_** seçili olacak. (**_Şekil 16_**) Bu seçenek ile uygulama çalıştığı sürece bulunduğunuz konum otomatik olarak güncellenecek ve[**_ aprs.fi_**](http://aprs.fi) haritasında görünecektir.

[caption id="attachment_373" align="alignnone" width="472"]![Şekil16 - SmartBeaconing ile Pozisyon](/assets/images/2025/04/Sekil-16-472x1024.jpeg) Şekil16 - SmartBeaconing ile Pozisyon[/caption]

## APRSDroid Çalıştırma

APRSDroid, yukarıda bahsedilen gerekli ayarlamaları yaptıktan sonra uygulamanın ilk giriş ekranında **_İzlemeyi Başlat_** butonuna tıklandıktan sonra APRS verilerini almaya başlayacaktır. **_Konum Gönder_** butonuna tıklandığında ise mevcut konumu gönderecektir. (**_Şekil 17_**)

[caption id="attachment_374" align="alignnone" width="472"]![Şekil 17 - APRSDroid ilk çalıştırma](/assets/images/2025/04/Sekil-17-472x1024.jpeg) Şekil 17 - APRSDroid ilk çalıştırma[/caption]

Aşağıdaki şekilde örnek çalışma ekranı görünmektedir. (**_Şekil 18_**)

[caption id="attachment_375" align="alignnone" width="472"]![Şekil 18 - Örnek izleme ekranı](/assets/images/2025/04/Sekil-18-472x1024.jpeg) Şekil 18 - Örnek izleme ekranı[/caption]

## APRSThursday Etkinliği

APRS topluluğu, her hafta perşembe günü düzenlenen **_APRS Thursday_** etkinliği kapsamında, dünya çapındaki amatör telsizcilerin birbirleriyle APRS mesajları göndermesini teşvik eder. Bu etkinliğe katılmak için aşağıdaki adımları takip edebilirsiniz:

- "**_Send Message_**" (Mesaj Gönder) Seçeneğini Seçin. (**_Şekil 19_**)

[caption id="attachment_376" align="alignnone" width="734"]![Şekil 19 - Mesaj Gönder](/assets/images/2025/04/Sekil-19.jpeg) Şekil 19 - Mesaj Gönder[/caption]

- Mesaj Alıcısı Çağrı İşaretini ve Mesajı Yazın **_(Şekil 20_**)

APRS Thursday için "**_ANSRVR_**" alıcı adı kullanılır.

- Mesaj için “**_CQ HOTG TURKIYE 73!_**” mesajı yazılır. Burada **TURKIYE** kelimesinde Türkçe karakter kullanmayın, mesajlarda tanımsız karakter olarak görünmekte ve okunamamaktadır.

[caption id="attachment_377" align="alignnone" width="472"]![Şekil 20 - Mesaj Yazma](/assets/images/2025/04/Sekil-20-472x1024.jpeg) Şekil 20 - Mesaj Yazma[/caption]

- **_Mesajı Gönderin_** ve APRS sunucuları üzerinden yayılmasını bekleyin.

- Diğer Kullanıcılardan Gelen Mesajları Takip Edin. (**_Şekil 21_**)

[caption id="attachment_378" align="alignnone" width="472"]![Şekil 21 - Mesajları izleme](/assets/images/2025/04/Sekil-21-472x1024.jpeg) Şekil 21 - Mesajları izleme[/caption]

Ayrıca, APRSDroid içindeki**_ APRS Message Log_** bölümünden gönderdiğiniz ve aldığınız mesajları inceleyebilirsiniz. [https://aprsph.net/aprsthursday/](https://aprsph.net/aprsthursday/) sitesinde gönderilen tüm mesajları da görebilirsiniz.

[caption id="attachment_379" align="alignnone" width="1024"]![APRSThursday Etkinliği Ana Sayfası.](/assets/images/2025/04/Sekil-22-1024x426.jpg) APRSThursday Etkinliği Ana Sayfası.[/caption]

[caption id="attachment_380" align="alignnone" width="1024"]![APRSThursday LOG Sayfası.](/assets/images/2025/04/Sekil-23-1024x407.jpg) APRSThursday LOG Sayfası.[/caption]

[caption id="attachment_382" align="alignnone" width="587"]![Örnek düzgün okunabilen mesaj.](/assets/images/2025/04/Sekil-24.jpg) Örnek düzgün okunabilen mesaj.[/caption]

[caption id="attachment_384" align="alignnone" width="615"]![Örnek Türkçe karakter sorunu.](/assets/images/2025/04/Sekil-25.jpg) Örnek Türkçe karakter sorunu.[/caption]

## **Sonuç**

[**_APRSDroid_**](http://aprsdroid.org), amatör telsizciler için güçlü ve kullanışlı bir APRS istemcisidir. Kurulumu ve ayarları kolay olup, özellikle mobil APRS kullanıcıları için büyük avantajlar sunar. [**_APRS Thursday_**](https://aprsph.net/aprsthursday/) gibi etkinliklere katılarak hem APRS sistemini daha iyi öğrenebilir hem de amatör telsiz topluluğuyla etkileşimde bulunabilirsiniz. Uygulamayı doğru şekilde yapılandırarak APRS’in tüm imkanlarından faydalanabilirsiniz.

Eğer[ **_APRSDroid_**](http://aprsdroid.org) ile ilgili sorularınız varsa veya ek destek isterseniz [Amatör Telsizci Telegram](https://t.me/amatortelsizci) grubundan bizimle iletişime geçebilirsiniz. 73!
