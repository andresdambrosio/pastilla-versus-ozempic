// Todas las fuentes del blog. Se citan con un link a /fuentes/#<id>.
export interface Fuente {
  id: string;
  corto: string; // cómo se nombra en el texto
  autores: string;
  titulo: string;
  revista: string;
  doi: string;
  financiamiento?: string;
  usamos: string[]; // qué datos tomamos de acá
}

export const FUENTES: Fuente[] = [
  {
    id: 'step-1',
    corto: 'STEP-1',
    autores: 'Wilding JPH, Batterham RL, Calanna S, et al.',
    titulo: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
    revista: 'N Engl J Med. 2021;384(11):989–1002',
    doi: '10.1056/NEJMoa2032183',
    financiamiento: 'Novo Nordisk',
    usamos: [
      '1.961 adultos sin diabetes, semaglutida 2,4 mg semanal o placebo, ambos con cambios de hábitos, durante 68 semanas.',
      'Cambio de peso promedio a la semana 68: −14,9% con semaglutida y −2,4% con placebo. Es el punto final de la curva de "Ozempic".',
      'La dosis se sube de a poco durante las primeras 16 semanas.',
      'Bajaron 5% o más el 86,4% de los pacientes con semaglutida; 10% o más el 69,1%; 15% o más el 50,5%.',
    ],
  },
  {
    id: 'surmount-1',
    corto: 'SURMOUNT-1',
    autores: 'Jastreboff AM, Aronne LJ, Ahmad NN, et al.',
    titulo: 'Tirzepatide Once Weekly for the Treatment of Obesity',
    revista: 'N Engl J Med. 2022;387(3):205–216',
    doi: '10.1056/NEJMoa2206038',
    financiamiento: 'Eli Lilly',
    usamos: [
      '2.539 adultos sin diabetes, tirzepatida 5, 10 o 15 mg semanal o placebo, durante 72 semanas, con 20 semanas de subida de dosis.',
      'Cambio de peso promedio a la semana 72 con 15 mg: −20,9%. Es el punto final de la curva de "Mounjaro".',
    ],
  },
  {
    id: 'step-5',
    corto: 'STEP-5',
    autores: 'Garvey WT, Batterham RL, Bhatta M, et al.',
    titulo: 'Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial',
    revista: 'Nat Med. 2022;28(10):2083–2091',
    doi: '10.1038/s41591-022-02026-4',
    financiamiento: 'Novo Nordisk',
    usamos: ['Con 2 años de semaglutida 2,4 mg, el peso promedio quedó en −15,2% a la semana 104 (placebo: −2,6%). La meseta se sostiene.'],
  },
  {
    id: 'select',
    corto: 'SELECT',
    autores: 'Ryan DH, Lingvay I, Deanfield J, et al.',
    titulo: 'Long-term weight loss effects of semaglutide in obesity without diabetes in the SELECT trial',
    revista: 'Nat Med. 2024;30(7):2049–2057',
    doi: '10.1038/s41591-024-02996-7',
    financiamiento: 'Novo Nordisk',
    usamos: ['El peso bajó hasta la semana 65 y después se mantuvo hasta 4 años. A las 208 semanas: −10,2% con semaglutida y −1,5% con placebo.'],
  },
  {
    id: 'step-1-extension',
    corto: 'Extensión de STEP-1',
    autores: 'Wilding JPH, Batterham RL, Davies M, et al.',
    titulo: 'Weight regain and cardiometabolic effects after withdrawal of semaglutide: The STEP 1 trial extension',
    revista: 'Diabetes Obes Metab. 2022;24(8):1553–1564',
    doi: '10.1111/dom.14725',
    financiamiento: 'Novo Nordisk',
    usamos: ['Un año después de dejar la semaglutida, los pacientes recuperaron alrededor de dos tercios del peso que habían bajado.'],
  },
  {
    id: 'surmount-4',
    corto: 'SURMOUNT-4',
    autores: 'Aronne LJ, Sattar N, Horn DB, et al.',
    titulo: 'Continued Treatment With Tirzepatide for Maintenance of Weight Reduction in Adults With Obesity: The SURMOUNT-4 Randomized Clinical Trial',
    revista: 'JAMA. 2024;331(1):38–48',
    doi: '10.1001/jama.2023.24945',
    financiamiento: 'Eli Lilly',
    usamos: [
      'Tras 36 semanas de tirzepatida (−20,9% promedio), los que pasaron a placebo recuperaron un 14% de peso en las 52 semanas siguientes; los que siguieron con la droga bajaron un 5,5% más.',
    ],
  },
  {
    id: 'franz-2007',
    corto: 'Franz et al., 2007',
    autores: 'Franz MJ, VanWormer JJ, Crain AL, et al.',
    titulo: 'Weight-loss outcomes: a systematic review and meta-analysis of weight-loss clinical trials with a minimum 1-year follow-up',
    revista: 'J Am Diet Assoc. 2007;107(10):1755–1767',
    doi: '10.1016/j.jada.2007.07.017',
    usamos: ['Con dieta, con o sin medicación, la pérdida de peso suele llegar a una meseta alrededor de los 6 meses (5–9% del peso).'],
  },
  {
    id: 'hall-kahan-2018',
    corto: 'Hall y Kahan, 2018',
    autores: 'Hall KD, Kahan S.',
    titulo: 'Maintenance of Lost Weight and Long-Term Management of Obesity',
    revista: 'Med Clin North Am. 2018;102(1):183–197',
    doi: '10.1016/j.mcna.2017.08.012',
    usamos: ['Por qué se amesetan las curvas: al bajar de peso cae el gasto de energía y aumenta el apetito, y el cuerpo resiste seguir bajando.'],
  },
  {
    id: 'oms-imc',
    corto: 'OMS',
    autores: 'Organización Mundial de la Salud.',
    titulo: 'Obesity and overweight (nota descriptiva)',
    revista: 'who.int',
    doi: '',
    usamos: ['Definición de IMC: peso en kg dividido por la altura en metros al cuadrado. Obesidad: IMC de 30 o más.'],
  },
];

export const URL_OMS = 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight';

export const linkFuente = (f: Fuente) => (f.doi ? `https://doi.org/${f.doi}` : URL_OMS);

export const fuente = (id: string) => {
  const f = FUENTES.find((x) => x.id === id);
  if (!f) throw new Error(`Fuente desconocida: ${id}`);
  return f;
};
