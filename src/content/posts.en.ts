/** English articles (translated from posts.vi.ts). */
import type { PostText } from './posts';

const source = '<p class="source">Specifications from the official product pages on SIMI.vn.</p>';

export const postsEn: Record<string, PostText> = {
  'chon-can-suc-khoe-thong-minh': {
    category: 'Health',
    title: 'Choosing a smart body scale: Gofit S2, Gofit X6 Pro or inBody i8?',
    excerpt: 'The three Crénot scales differ in electrodes, number of metrics and display. A comparison table and which one fits which need.',
    summary: [
      '<strong>Starting to track your weight on a moderate budget:</strong> Gofit S2 – 4 electrodes, 6 metrics on the display, 15 in the app.',
      '<strong>Want many metrics on the scale itself, no phone needed:</strong> Gofit X6 Pro – 4.8-inch colour display showing 8 metrics, 17 metrics in total.',
      '<strong>Training at the gym and need per-segment results:</strong> inBody i8 – 8 electrodes measuring arms, legs and trunk, 31 metrics.',
    ],
    body: `
<h2>How does a smart scale measure body composition?</h2>
<p>All three Crénot scales use bioelectrical impedance analysis (BIA). When you stand barefoot on the scale, a very small current passes through your body between the electrodes. Fat conducts electricity less well than muscle and water, so from the measured resistance plus your height, age and sex, the scale estimates body fat, muscle mass, body water and other metrics.</p>
<p>The most important difference is the <strong>number of electrodes</strong>. A 4-electrode scale only sends current through the legs, so the upper body is estimated indirectly. An 8-electrode scale adds a handle and measures arms, legs and trunk.</p>

<h2>Quick comparison</h2>
<table>
<thead><tr><th></th><th>Gofit S2</th><th>Gofit X6 Pro</th><th>inBody i8</th></tr></thead>
<tbody>
<tr><th>Measurement</th><td>BIA, 4 electrodes</td><td>BIA, 4 ZeroVar G-Shape® sensors</td><td>Dual-frequency PureBIA, 8 electrodes</td></tr>
<tr><th>Metrics</th><td>15</td><td>17</td><td>31, plus each body segment</td></tr>
<tr><th>Shown on the scale</th><td>6 metrics</td><td>8 metrics, 4.8-inch colour display</td><td>LCD on the handle</td></tr>
<tr><th>Platform</th><td>Tempered glass</td><td>6 mm ITO-coated tempered glass</td><td>Tempered glass</td></tr>
<tr><th>Without a phone</th><td>6 metrics on the display</td><td>Yes, FeetID™ recognition</td><td>Yes, automatic user recognition</td></tr>
<tr><th>Weight range</th><td>6–180 kg</td><td>6–180 kg</td><td>2–180 kg</td></tr>
<tr><th>Power</th><td>3 AAA batteries</td><td>4 AAA batteries</td><td>Lithium battery</td></tr>
</tbody>
</table>
${source}

<h2>Gofit S2: enough for the whole family</h2>
<p>Gofit S2 shows 6 metrics on its display: weight, body fat, body water, muscle mass, bone mass and BMI. Connect it to the app over Bluetooth for visceral fat, subcutaneous fat, BMR, protein and body age – 15 metrics in all – saved as daily, monthly and yearly charts. It supports unlimited users, so it works well as a shared household scale.</p>

<h2>Gofit X6 Pro: 8 metrics right on the scale</h2>
<p>X6 Pro is the premium version of the S2. Its 4.8-inch colour display shows 8 metrics, adding heart rate and a body shape report, so you do not need to open your phone after each weigh-in. ITO-coated glass replaces steel electrodes for full contact under your feet. From the second reading, FeetID™ recognises each person and measures offline.</p>

<h2>inBody i8: when you need per-segment numbers</h2>
<p>inBody i8 has 4 electrodes on the platform and 4 on its retractable handle. The current passes through the whole body, so it analyses 31 metrics plus muscle and fat for each arm, each leg and the trunk. This is the kind of report you see at a gym, useful when building muscle and checking which side is weaker.</p>

<h2>How to get consistent readings</h2>
<ul>
<li>Place the scale on a hard, flat floor, not on a rug.</li>
<li>After unboxing or moving the scale, skip the first 5 readings.</li>
<li>Stand barefoot with dry feet; with inBody i8, hold the handle on its electrodes.</li>
<li>Weigh in at the same time every day, for example in the morning before eating, so you can compare trends.</li>
</ul>
<p>Pregnant women should not measure body composition, and people with implanted devices such as a pacemaker should not use bioelectrical impedance scales. Scale metrics are for tracking trends and do not replace a diagnosis from a doctor.</p>
`,
    faq: [
      { q: 'Are smart scales accurate?', a: 'BIA scales give consistent results for tracking trends when you measure correctly and at the same time each day. An 8-electrode scale like inBody i8 measures the whole body, so it gives more detail than a 4-electrode scale.' },
      { q: 'Can the whole family share one scale?', a: 'Yes. All three support unlimited users; Gofit X6 Pro and inBody i8 also recognise each person automatically.' },
      { q: 'Where can I buy genuine Crénot scales?', a: 'Crénot products are sold officially at SIMI.vn, with an electronic warranty.' },
    ],
  },
  'do-chi-so-co-the-dung-cach': {
    category: 'Health',
    title: 'Understanding smart-scale metrics and how to measure correctly',
    excerpt: 'Body fat, visceral fat, muscle mass, BMR… what each metric on a smart scale tells you, and 6 tips for consistent readings.',
    summary: [
      '<strong>A smart scale estimates body composition</strong> with bioelectrical impedance analysis (BIA); results are most useful as trends over time, not as a single reading.',
      '<strong>Three metrics to watch first:</strong> body fat percentage, muscle mass and visceral fat – they say more than weight and BMI.',
      '<strong>Measure correctly:</strong> same time each day, barefoot with dry feet, scale on a hard flat floor; skip the first 5 readings after moving it.',
    ],
    body: `
<h2>How does a smart scale measure?</h2>
<p>When you stand barefoot on the scale, a tiny current you cannot feel passes through your body between the electrodes. Water and muscle conduct electricity well, fat poorly. From the measured resistance and the height, age and sex you enter, the scale estimates your body composition. Because it is an estimate, results can vary with your body water, which is why trends matter most.</p>

<h2>Common metrics</h2>
<table>
<thead><tr><th>Metric</th><th>What it means</th></tr></thead>
<tbody>
<tr><th>Weight</th><td>Total body mass, including fat, muscle, bone and water.</td></tr>
<tr><th>BMI</th><td>Weight divided by height squared; it cannot tell muscle from fat.</td></tr>
<tr><th>Body fat</th><td>Fat mass as a percentage of body weight.</td></tr>
<tr><th>Visceral fat</th><td>Fat around the organs in the abdomen; a falling trend is the goal.</td></tr>
<tr><th>Subcutaneous fat</th><td>The fat layer just under the skin.</td></tr>
<tr><th>Muscle mass</th><td>Mass of your muscles; rises with regular strength training.</td></tr>
<tr><th>Bone mass</th><td>Estimated mineral mass of your bones.</td></tr>
<tr><th>Body water</th><td>Percentage of water in the body; changes with drinking and activity.</td></tr>
<tr><th>BMR</th><td>The minimum energy your body needs at rest in a day.</td></tr>
<tr><th>Protein</th><td>Proportion of protein in the body, linked to muscle.</td></tr>
<tr><th>Body age</th><td>An estimate based on your body composition compared with your real age.</td></tr>
</tbody>
</table>

<h2>Why weight alone is not enough</h2>
<p>Two people with the same weight and height can have very different body fat. When you train, your weight may stay the same while fat falls and muscle rises. Tracking body fat and muscle mass shows progress the weight number hides.</p>

<h2>6 tips for consistent readings</h2>
<ol>
<li>Place the scale on a hard, flat floor, not on a rug.</li>
<li>Skip the first 5 readings after unboxing or moving the scale.</li>
<li>Stand barefoot with dry feet, covering the electrodes.</li>
<li>Measure at the same time every day, for example in the morning after the bathroom and before eating.</li>
<li>Avoid measuring right after hard exercise, a hot shower or drinking a lot, as body water changes.</li>
<li>Enter your correct height, age and sex in the app; one account per person.</li>
</ol>

<h2>Pick a scale by the metrics you need</h2>
<p>Gofit S2 shows 6 metrics on its display and measures 15 in the app; Gofit X6 Pro measures 17 and shows 8 plus heart rate on a colour display; inBody i8 uses 8 electrodes to analyse 31 metrics and each body segment.</p>
<p>Impedance scales are not for people with implanted devices such as a pacemaker, and pregnant women should not measure body composition. The metrics are for tracking and do not replace a diagnosis from a doctor.</p>
`,
    faq: [
      { q: 'Why are morning and evening readings different?', a: 'Your body water changes during the day with food, drink and activity, which affects BIA results. Measure at the same time each day for accurate comparisons.' },
      { q: 'Can children see their body fat?', a: 'With Gofit S2, children under 6 see weight only, and children under 10 see weight and BMI.' },
      { q: 'How often should I measure?', a: 'Daily or a few times a week at the same time, then look at weekly and monthly trends in the app.' },
    ],
  },
  'triet-long-ipl-tai-nha': {
    category: 'Beauty',
    title: 'At-home IPL hair removal with Crenot Graci X3: how to use it and stay safe',
    excerpt: 'How IPL works, the steps for using Graci X3, aftercare and when to be careful.',
    summary: [
      '<strong>IPL</strong> uses pulses of light absorbed by the pigment in hair follicles, so hair grows back slower and thinner over repeated sessions.',
      '<strong>Crenot Graci X3:</strong> 999,999 flashes, 9 intensity levels, Infinity Ice Compress cooling to limit stinging, automatic or manual mode.',
      '<strong>Safety:</strong> always wear the protective glasses, test a small patch at the lowest level first, and never use it on damaged skin.',
    ],
    body: `
<h2>How does IPL work?</h2>
<p>An IPL (Intense Pulsed Light) device emits broad-spectrum light pulses. Melanin in the hair and follicle absorbs the light energy, which turns into heat and weakens the follicle, so hair grows back slower and thinner. Because hair grows in cycles, repeated sessions are needed for clear results.</p>

<h2>What Crenot Graci X3 offers</h2>
<table>
<thead><tr><th>Specification</th><th>Graci X3</th></tr></thead>
<tbody>
<tr><th>Technology</th><td>IPL with Infinity Ice Compress cooling</td></tr>
<tr><th>Flashes</th><td>999,999 (about 10 years of use)</td></tr>
<tr><th>Intensity</th><td>9 levels</td></tr>
<tr><th>Modes</th><td>Automatic or manual flash, plus a skin rejuvenation mode</td></tr>
<tr><th>Size, weight</th><td>203 × 66 × 42 mm, 280 g</td></tr>
<tr><th>Power</th><td>Input 100–240 V, output 24 V 2 A 48 W</td></tr>
</tbody>
</table>
${source}

<h2>Using Graci X3 step by step</h2>
<ol>
<li>Shave and clean the area; skin should be dry with no cream.</li>
<li>Put on the protective glasses and choose a mode and intensity. The first time, test a small patch at the lowest level.</li>
<li>Hold the window flat and perpendicular against the skin. In Auto mode it flashes as you glide; in manual mode you press for each flash.</li>
<li>When finished, switch off, unplug the adapter from the device and then from the socket. After 10 minutes, wipe the flash window with a soft cloth.</li>
</ol>

<h2>Aftercare</h2>
<p>After about 20 minutes you can apply a moisturiser. If the skin feels uncomfortable, apply a cold compress for 30–60 minutes. Keep treated skin out of strong sun and use sunscreen when you go out.</p>

<h2>When to be careful</h2>
<ul>
<li>Do not treat skin that is injured, inflamed or sunburnt.</li>
<li>As generally advised for IPL devices: avoid tattoos, moles and very dark skin; IPL works poorly on white, grey, light blonde or red hair.</li>
<li>If you are pregnant, have a skin condition or take light-sensitising medication, ask a doctor first.</li>
<li>The device is not waterproof: use and store it in a dry place, never in the shower.</li>
</ul>
`,
    faq: [
      { q: 'Does IPL hair removal hurt?', a: 'Most people feel only warmth or a slight prick. Graci X3 uses Infinity Ice Compress cooling to soothe the skin and limit stinging, even on sensitive areas.' },
      { q: 'Can I use it on the face and bikini line?', a: 'Yes, at a low intensity after testing a small patch. Always wear the protective glasses and never flash near the eyes.' },
      { q: 'How long do 999,999 flashes last?', a: 'According to SIMI.vn, that is about 10 years of use.' },
    ],
  },
  'dung-may-massage-cam-tay-dung-cach': {
    category: 'Sport',
    title: 'Using a massage gun correctly with the Crenot Thunder Z6',
    excerpt: 'Choosing the level and head, how long to work each muscle group and where not to use it. A guide for active people and office workers.',
    summary: [
      '<strong>A massage gun</strong> delivers rapid percussive strokes that help loosen tight muscles before and after exercise.',
      '<strong>Crenot Thunder Z6:</strong> brushless motor, 12 mm amplitude, 3,500 ± 200 RPM, 9 levels, 4 heads, 60° adjustable head.',
      '<strong>How to use it:</strong> start low, glide slowly over the muscle belly for about 1–2 minutes per muscle group, and avoid bones, joints, the head and the front of the neck.',
    ],
    body: `
<h2>How does a massage gun work?</h2>
<p>The head moves back and forth very quickly, delivering continuous strokes into the muscle. Amplitude is how far the head travels with each stroke: the larger it is, the deeper the effect. With 12 mm of amplitude, Thunder Z6 reaches deep into large muscles such as the thighs, calves and back, helping release tightness after training or long hours of sitting.</p>

<h2>Thunder Z6 specifications</h2>
<table>
<thead><tr><th>Specification</th><th>Thunder Z6</th></tr></thead>
<tbody>
<tr><th>Motor</th><td>Brushless</td></tr>
<tr><th>Amplitude</th><td>12 mm</td></tr>
<tr><th>Speed</th><td>3,500 ± 200 RPM</td></tr>
<tr><th>Levels</th><td>9</td></tr>
<tr><th>Heads</th><td>4 polyurethane heads</td></tr>
<tr><th>Design</th><td>Triangular TriForce, 60° adjustable head</td></tr>
<tr><th>Weight</th><td>0.86 kg</td></tr>
</tbody>
</table>
${source}

<h2>Choosing level and time</h2>
<ul>
<li><strong>Before training:</strong> low to medium level, about 30 seconds to 1 minute per muscle group to warm up.</li>
<li><strong>After training:</strong> medium level, about 1–2 minutes per muscle group, gliding slowly along the muscle.</li>
<li><strong>After long hours at a desk:</strong> a low level on the back of the shoulders and upper back, gently, without pressing hard.</li>
</ul>
<p>Thunder Z6 has a sensor that adds force on tight muscles; simply hold it and let the head glide, without pressing hard.</p>

<h2>Which head to use</h2>
<p>The four soft polyurethane heads are each optimised for a muscle group. In general, larger heads suit large muscles such as thighs and glutes, smaller heads suit local tight spots, and no head should be placed on the spine. The 60° adjustable head helps you reach your back and shoulders without twisting your wrist.</p>

<h2>Where not to use it</h2>
<ul>
<li>Not directly on bones, joints, the spine, the head or the front of the neck.</li>
<li>Not on injured, bruised, swollen or inflamed skin.</li>
<li>Ask a doctor first if you are pregnant, have a heart condition or a pacemaker, a fracture, osteoporosis, joint or spine problems, or a malignant tumour.</li>
</ul>
`,
    faq: [
      { q: 'Can I use a massage gun every day?', a: 'Yes, at a suitable level and for a reasonable time per muscle group. If pain increases, stop and ask a doctor or physiotherapist.' },
      { q: 'What does 12 mm amplitude change?', a: 'A larger amplitude reaches deeper into the muscle, which suits large muscle groups and post-workout recovery.' },
      { q: 'What battery does it use?', a: 'Thunder Z6 uses a rechargeable lithium-ion battery, 5 V, 25 W.' },
    ],
  },
  'tap-luyen-tai-nha-voi-spin-x8': {
    category: 'Sport',
    title: 'Staying active at home and at the office with the Crenot Spin X8 foldable pedal exerciser',
    excerpt: 'Spin X8 lets you move your legs or arms under your desk or next to the sofa. Who it is for, how to set it up and a light session to try.',
    summary: [
      '<strong>Spin X8</strong> is a foldable mini pedal exerciser for legs and arms, with adjustable resistance and an LCD for time, calories, rotations and distance.',
      '<strong>Good for:</strong> people who sit a lot, busy people wanting light exercise, and older adults keeping their arms and legs active.',
      '<strong>Note:</strong> start at a low resistance; if you are recovering from an injury, ask your doctor or physiotherapist.',
    ],
    body: `
<h2>What is Spin X8?</h2>
<p>Spin X8 is a mini pedal unit with a steel frame and anti-slip feet that folds in seconds. Put it under your feet while seated to pedal like a bike, or on a table to pedal with your hands. It runs quietly, so it can be used at the office without disturbing others.</p>

<h2>Specifications</h2>
<table>
<thead><tr><th>Specification</th><th>Spin X8</th></tr></thead>
<tbody>
<tr><th>Material</th><td>Stainless steel and ABS</td></tr>
<tr><th>Size</th><td>40 × 47 × 28 cm</td></tr>
<tr><th>Colour</th><td>Yellow / Black</td></tr>
<tr><th>Display</th><td>LCD: time, calories burned, rotations, distance</td></tr>
<tr><th>Resistance</th><td>Adjustable</td></tr>
</tbody>
</table>
${source}

<h2>Who is it for?</h2>
<ul>
<li>Office workers who sit for long hours and want to keep their legs moving.</li>
<li>Busy people with no time for the gym.</li>
<li>Older adults who want gentle arm and leg activity at home.</li>
</ul>

<h2>Setting it up</h2>
<ul>
<li>Place it on a flat floor with a stable chair, not one on rolling casters.</li>
<li>Position it so your knee is slightly bent at the furthest point of the pedal stroke.</li>
<li>For arm training, place it on a sturdy table at about chest height.</li>
</ul>

<h2>A light session to try</h2>
<ol>
<li>3 minutes of slow pedalling at low resistance to warm up.</li>
<li>10–15 minutes of steady pedalling, increasing resistance until you breathe faster but can still talk.</li>
<li>3 minutes of slow pedalling to cool down; you can add 5 minutes of arm pedalling afterwards.</li>
</ol>
<p>The LCD records time, calories, rotations and distance so you can compare sessions. Start gently and build up at your own pace.</p>
`,
    faq: [
      { q: 'Can Spin X8 be used for rehabilitation after an injury?', a: 'Spin X8 supports light arm and leg movement. If you are being treated for an injury or condition, ask your doctor or physiotherapist about the right intensity and duration.' },
      { q: 'Is it noisy?', a: 'According to SIMI.vn, Spin X8 runs quietly and is suitable for the office.' },
      { q: 'Can I store it away easily?', a: 'Yes. It folds in seconds and fits under a desk or in a bag.' },
    ],
  },
  'bao-hanh-san-pham-crenot': {
    category: 'Support',
    title: 'Crénot warranty: activation, coverage and how to make a claim',
    excerpt: 'Crénot products have an electronic warranty that activates on delivery. Coverage periods, how to check it, the claim process and what is not covered.',
    summary: [
      '<strong>The electronic warranty activates automatically</strong> when the courier confirms delivery; check it at baohanh.simi.vn or in the SIMI app.',
      '<strong>Coverage:</strong> products with electronics and included accessories 12 months; batteries and separately bought accessories 6 months.',
      '<strong>Replacement:</strong> free one-for-one exchange for manufacturing defects within the first 15 days.',
    ],
    body: `
<h2>Warranty periods</h2>
<table>
<thead><tr><th>Type</th><th>Period</th></tr></thead>
<tbody>
<tr><th>Products with electronics and included accessories (scales, IPL device, massage gun, exerciser display)</th><td>12 months</td></tr>
<tr><th>Batteries and separately bought accessories</th><td>6 months</td></tr>
<tr><th>Replacement for manufacturing defects</th><td>First 15 days</td></tr>
</tbody>
</table>
<p class="source">According to the warranty policy at baohanh.simi.vn. Each product line may have its own conditions; contact SimiGO customer care on Zalo OA for details.</p>

<h2>Activation and lookup</h2>
<p>Crénot products bought at SIMI.vn have an electronic warranty: the system activates it automatically and it runs from the day you receive the product. You can look up, activate and follow your records at baohanh.simi.vn, in the SIMI app or by asking the Simi NowFa assistant.</p>

<h2>The claim process</h2>
<ol>
<li><strong>Submit a request</strong> when the product has a fault; the system explains how to send it to the service centre if needed.</li>
<li><strong>Inspection:</strong> the cause is identified; if the repair is not covered, you are told the cause and the cost first.</li>
<li><strong>Repair:</strong> repair, part replacement or product exchange according to the policy.</li>
<li><strong>Completion:</strong> you get the result within 5 working days of receipt, not counting shipping and waiting for parts.</li>
</ol>

<h2>Not covered by the free warranty</h2>
<ul>
<li>Products past their warranty period, or repaired outside an authorised service centre.</li>
<li>Incorrect use or maintenance; faults caused by the user.</li>
<li>Damage from water or liquids (the Graci X3 is not waterproof), dirt, or cracks from impact.</li>
<li>Damage from natural disasters, fire, insects or animals.</li>
</ul>

<h2>Keeping your products in good shape</h2>
<ul>
<li><strong>Scales:</strong> wipe the glass with a damp cloth, never soak it; remove the batteries if unused for a long time (Gofit S2 and Gofit X6 Pro use AAA batteries).</li>
<li><strong>Graci X3:</strong> wipe the flash window with a soft cloth after each use and store it somewhere dry.</li>
<li><strong>Thunder Z6:</strong> clean the heads and fully charge the battery before storing it for a long time.</li>
</ul>
`,
    faq: [
      { q: 'Where can I buy Crénot with an official warranty?', a: 'Crénot products are sold officially at SIMI.vn, with an electronic warranty that activates on delivery.' },
      { q: 'Do I need a paper warranty card?', a: 'No. Look it up by phone number or order code at baohanh.simi.vn or in the SIMI app.' },
      { q: 'How long does a warranty repair take?', a: 'You get the result within 5 working days of receipt, not counting shipping and waiting for parts.' },
    ],
  },
};
