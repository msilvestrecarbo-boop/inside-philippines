/** Plain-text confirmation emailed to a traveller after they write to us (text approved by MARC, 2026-10-25). */
const text: Record<string, (name: string) => string> = {
  en: (n) => `Hello ${n},

Thank you for contacting Inside Philippines! We've received your message, and we're excited to help you discover the Philippines from the inside.

What happens next
1. A real person from our team reads your request, never a robot.
2. Within one working day we'll get back to you by email (or WhatsApp if you gave us your number) with first ideas and a few questions about your dates, travel style and budget.
3. Together we shape your tailor-made journey until it feels just right.

Good to know: every journey includes travel insurance with €2,000 cancellation cover, and Spanish-speaking guides are available.

Can't wait? Message us on WhatsApp: +63 952 405 0513 (Mon–Sat, 9:00–18:00 Philippine time).
Get inspired: instagram.com/inside.philippines

Warm regards, salamat po!
Marc and the Inside Philippines team
www.insidephilippines.com`,
  fr: (n) => `Bonjour ${n},

Merci d'avoir contacté Inside Philippines ! Nous avons bien reçu votre message et nous avons hâte de vous faire découvrir les Philippines de l'intérieur.

Et maintenant ?
1. Une vraie personne de notre équipe lit votre demande, jamais un robot.
2. Sous un jour ouvré, nous revenons vers vous par e-mail (ou sur WhatsApp si vous nous avez laissé votre numéro) avec de premières idées et quelques questions sur vos dates, votre style de voyage et votre budget.
3. Ensemble, nous construisons votre voyage sur mesure jusqu'à ce qu'il vous ressemble.

Bon à savoir : chaque voyage inclut une assurance voyage avec une garantie annulation de 2 000 €, et des guides hispanophones sont disponibles.

Vous êtes impatient ? Écrivez-nous sur WhatsApp : +63 952 405 0513 (du lundi au samedi, de 9 h à 18 h, heure des Philippines).
Inspirez-vous : instagram.com/inside.philippines

Bien chaleureusement, salamat po !
Marc et l'équipe Inside Philippines
www.insidephilippines.com`,
  es: (n) => `Hola ${n}:

¡Gracias por contactar con Inside Philippines! Hemos recibido tu mensaje y nos hace mucha ilusión ayudarte a descubrir Filipinas desde dentro.

¿Qué pasa ahora?
1. Una persona real de nuestro equipo lee tu solicitud, nunca un robot.
2. En un día laborable te responderemos por email (o por WhatsApp si nos dejaste tu número) con las primeras ideas y algunas preguntas sobre tus fechas, tu estilo de viaje y tu presupuesto.
3. Juntos damos forma a tu viaje a medida hasta que sea exactamente como lo imaginas.

Bueno saber: todos los viajes incluyen seguro de viaje con cobertura de cancelación de 2.000 €, y hay guías de habla hispana disponibles.

¿No puedes esperar? Escríbenos por WhatsApp: +63 952 405 0513 (de lunes a sábado, de 9:00 a 18:00, hora de Filipinas).
Inspírate: instagram.com/inside.philippines

Un abrazo, ¡salamat po!
Marc y el equipo de Inside Philippines
www.insidephilippines.com`,
  ru: (n) => `Здравствуйте, ${n}!

Спасибо, что написали в Inside Philippines! Мы получили ваше сообщение и с радостью поможем вам открыть Филиппины изнутри.

Что дальше
1. Ваш запрос читает живой человек из нашей команды, а не робот.
2. В течение одного рабочего дня мы ответим вам по электронной почте (или в WhatsApp, если вы оставили номер) с первыми идеями и несколькими вопросами о датах, стиле поездки и бюджете.
3. Вместе мы создадим ваше индивидуальное путешествие, пока оно не станет именно таким, как вы хотите.

Полезно знать: каждое путешествие включает туристическую страховку с покрытием отмены поездки до 2000 €, также доступны испаноговорящие гиды.

Не хотите ждать? Напишите нам в WhatsApp: +63 952 405 0513 (пн–сб, 9:00–18:00 по филиппинскому времени).
Вдохновляйтесь: instagram.com/inside.philippines

С теплом, salamat po!
Марк и команда Inside Philippines
www.insidephilippines.com`,
  ar: (n) => `مرحبًا ${n}،

شكرًا لتواصلك مع Inside Philippines! لقد استلمنا رسالتك، ويسعدنا أن نساعدك على اكتشاف الفلبين من الداخل.

ماذا بعد؟
1. يقرأ طلبك شخص حقيقي من فريقنا، وليس روبوتًا.
2. خلال يوم عمل واحد سنرد عليك عبر البريد الإلكتروني (أو عبر واتساب إن تركت لنا رقمك) بأفكار أولية وبعض الأسئلة عن مواعيدك وأسلوب سفرك وميزانيتك.
3. نصمّم معًا رحلتك المفصّلة على مقاسك حتى تصبح كما تتمناها تمامًا.

من المفيد أن تعرف: تشمل كل رحلة تأمين سفر مع تغطية إلغاء بقيمة 2000 يورو، ويتوفر مرشدون يتحدثون الإسبانية.

لا تستطيع الانتظار؟ راسلنا عبر واتساب: ‎+63 952 405 0513 (من الاثنين إلى السبت، 9:00–18:00 بتوقيت الفلبين).
استلهم أفكارًا: instagram.com/inside.philippines

مع أطيب التحيات، salamat po!
مارك وفريق Inside Philippines
www.insidephilippines.com`,
};

export function travellerConfirmation(locale: string, name: string) {
  const first = name.trim().split(/\s+/)[0] || "";
  const out = (text[locale] || text.en)(first);
  // No name given: "Hello ," -> "Hello,", "Здравствуйте, !" -> "Здравствуйте!"
  return first ? out : out.replace(/^(\S+) ([,:،])/, "$1$2").replace(/^(\S+), !/, "$1!");
}
