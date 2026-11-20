import {
  Snowflake,
  Flame,
  Wrench,
  Gauge,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Settings,
  Wind,
  type LucideIcon,
} from 'lucide-react';

export interface LandingServiceItem {
  id: string;
  name: string;
  shortTag: string;
  icon: LucideIcon;
  summary: string;
  highlights: string[];
  commonIssues: string[];
}

export interface NearbyCommunity {
  name: string;
  county: string;
  zipCodes: string;
  distance: string;
  dispatchCorridor: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export const LANDING_CONFIG = {
  niche: 'HVAC',
  nicheFull: 'Heating & Air Conditioning',
  location: 'Lawrenceville, GA',
  city: 'Lawrenceville',
  state: 'GA',
  county: 'Gwinnett County',
  zip: '30046',
  fullIdentity: 'HVAC in Lawrenceville',
  headlineIdentity: 'HVAC in Lawrenceville, GA',
  phoneDisplay: '(470) 331-4715',
  phoneTel: '+14703314715',
  baseLocationDisplay: 'Lawrenceville, GA 30046',
  workingHours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 7:00 PM' },
    { days: 'Saturday', hours: '8:30 AM – 5:00 PM' },
    { days: 'Sunday', hours: 'Emergency Dispatch On-Call' },
  ],
  certificationNote: 'EPA Section 608 Certified Technicians • Georgia Mechanical Code Compliant',
  heroImage: 'https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  coolingImage: 'https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heatingImage: 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Lawrenceville%2C+GA+30046&t=&z=12&ie=UTF8&iwloc=&output=embed',
};

export const LANDING_SERVICES: LandingServiceItem[] = [
  {
    id: 'ac-repair',
    name: 'Air Conditioning Repair',
    shortTag: 'Fast Cooling Restoration',
    icon: Snowflake,
    summary:
      'Structured diagnostic testing for air conditioners that run continuously, blow room-temperature air, or cycle off prematurely during peak summer heat.',
    highlights: [
      'Dual-run capacitor and compressor contactor load testing',
      'Electronic refrigerant leak detection and pressure checks',
      'Condensate drain line vacuum cleanout and safety float switches',
      'Evaporator coil inspection and fin straightening',
    ],
    commonIssues: [
      'Warm or lukewarm air discharging from supply vents',
      'Loud humming, buzzing, or clicking from outdoor condenser',
      'Water pooling around indoor air handler closet or drain pan',
    ],
  },
  {
    id: 'ac-installation',
    name: 'AC System Installation & Replacement',
    shortTag: 'High-Efficiency Cooling',
    icon: Gauge,
    summary:
      'Properly sized central cooling replacements engineered with Manual J load calculations to deliver even humidity control and lower electric bills.',
    highlights: [
      'Accurate room-by-room square footage and attic duct assessment',
      'Modern high-efficiency SEER2 split cooling systems',
      'New digital line set evacuation and precision refrigerant charging',
      'Full post-installation static pressure and airflow verification',
    ],
    commonIssues: [
      'Aging R-410A system exceeding 12–15 years of continuous service',
      'Repeated expensive repairs on obsolete compressor or coil components',
      'Upstairs rooms remaining 5–10° warmer than lower living levels',
    ],
  },
  {
    id: 'heating-repair',
    name: 'Heating & Furnace Repair',
    shortTag: 'Dependable Winter Warmth',
    icon: Flame,
    summary:
      'Prompt diagnostic troubleshooting for gas furnaces, electric air handlers, and heating systems to restore safe, comfortable winter temperatures.',
    highlights: [
      'Hot surface ignitor and flame sensor cleaning and replacement',
      'Heat exchanger inspection for cracks or combustion safety hazards',
      'Inducer draft motor and pressure switch verification',
      'Blower motor capacitor testing and high-limit safety checks',
    ],
    commonIssues: [
      'Furnace blowing cold air while heating cycle attempts to fire',
      'System short-cycling after burning for two to three minutes',
      'Persistent metallic burning odor or unusual rattling startup noises',
    ],
  },
  {
    id: 'heat-pump-service',
    name: 'Heat Pump Repair & Installation',
    shortTag: 'Year-Round Climate Control',
    icon: Wind,
    summary:
      'Specialized care for dual-season heat pumps that provide both summer cooling and winter warmth without requiring a natural gas hookup.',
    highlights: [
      'Four-way reversing valve testing and solenoid coil replacement',
      'Defrost control board diagnostic checks and temperature sensor testing',
      'Electric auxiliary heat strip staging and sequencer verification',
      'Variable-speed inverter compressor diagnostics',
    ],
    commonIssues: [
      'Outdoor unit frozen in a thick block of ice during winter frost',
      'System stuck permanently in cooling mode and unable to produce heat',
      'Auxiliary or emergency heat running constantly, raising energy bills',
    ],
  },
  {
    id: 'hvac-maintenance',
    name: 'Seasonal HVAC Maintenance & Tune-Up',
    shortTag: 'Preventative Longevity',
    icon: Wrench,
    summary:
      'Comprehensive multi-point seasonal inspections designed to catch failing capacitors, clear drain traps, and optimize energy efficiency before peak heat waves.',
    highlights: [
      'Outdoor condenser coil power wash to restore heat dissipation',
      'Electrical terminal tightening and operating amperage readings',
      'Refrigerant superheat and subcooling verification against factory specs',
      'Blower assembly inspection and indoor air filter check',
    ],
    commonIssues: [
      'Sudden system shutdown on the hottest 95°F afternoon of the year',
      'Gradual drop in cooling performance and climbing monthly energy bills',
      'Unnoticed condensate drain line blockages risking ceiling damage',
    ],
  },
  {
    id: 'thermostat-installation',
    name: 'Thermostat Installation & Smart Controls',
    shortTag: 'Precision Comfort',
    icon: Thermometer,
    summary:
      'Installation, 24V control wiring repair, and calibration for modern programmable and Wi-Fi smart thermostats for effortless climate management.',
    highlights: [
      'Low-voltage C-wire running and 24-volt transformer testing',
      'Compatibility matching for multi-stage heat pumps and dual-fuel units',
      'Remote temperature sensor placement to eliminate hot spots',
      'Hands-on system scheduling setup and mobile app pairing',
    ],
    commonIssues: [
      'Thermostat screen blank or losing connection due to missing C-wire',
      'System not switching properly between heating and cooling stages',
      'Wide temperature swings between what the thermostat reads and feels like',
    ],
  },
];

export const NEARBY_COMMUNITIES: NearbyCommunity[] = [
  {
    name: 'Snellville, GA',
    county: 'Gwinnett County',
    zipCodes: '30039, 30078',
    distance: '~8 miles south',
    dispatchCorridor: 'Dispatched via GA-124 / Scenic Hwy',
  },
  {
    name: 'Lilburn, GA',
    county: 'Gwinnett County',
    zipCodes: '30047, 30048',
    distance: '~9 miles southwest',
    dispatchCorridor: 'Dispatched via US-29 / Lawrenceville Hwy',
  },
  {
    name: 'Duluth, GA',
    county: 'Gwinnett County',
    zipCodes: '30096, 30097',
    distance: '~10 miles northwest',
    dispatchCorridor: 'Dispatched via GA-120 / Duluth Hwy',
  },
  {
    name: 'Suwanee, GA',
    county: 'Gwinnett County',
    zipCodes: '30024',
    distance: '~9 miles north',
    dispatchCorridor: 'Dispatched via Buford Hwy & I-85',
  },
  {
    name: 'Loganville, GA',
    county: 'Gwinnett / Walton',
    zipCodes: '30052',
    distance: '~11 miles southeast',
    dispatchCorridor: 'Dispatched via US-78 & GA-20',
  },
  {
    name: 'Grayson, GA',
    county: 'Gwinnett County',
    zipCodes: '30017',
    distance: '~5 miles southeast',
    dispatchCorridor: 'Dispatched via Grayson Hwy / GA-20',
  },
  {
    name: 'Dacula, GA',
    county: 'Gwinnett County',
    zipCodes: '30019',
    distance: '~7 miles northeast',
    dispatchCorridor: 'Dispatched via US-29 / Winder Hwy',
  },
  {
    name: 'Norcross, GA',
    county: 'Gwinnett County',
    zipCodes: '30071, 30092',
    distance: '~13 miles west',
    dispatchCorridor: 'Dispatched via Beaver Ruin Rd & I-85',
  },
  {
    name: 'NE Atlanta, GA',
    county: 'Fulton / DeKalb',
    zipCodes: '30340, 30341',
    distance: '~20 miles southwest',
    dispatchCorridor: 'Dispatched along the I-85 & I-285 perimeter',
  },
];

export const WHY_CHOOSE_US_PILLARS = [
  {
    title: 'EPA Section 608 Certified',
    description:
      'All refrigerant handling, leak detection, and recovery operations comply strictly with Federal EPA standards and Georgia mechanical safety regulations.',
    icon: ShieldCheck,
  },
  {
    title: 'Lawrenceville Central Dispatch',
    description:
      'Centrally headquartered in Lawrenceville, GA 30046. Technicians dispatch directly along GA-120, US-29, and GA-316 with zero out-of-market delays.',
    icon: MapPin,
  },
  {
    title: 'Upfront Diagnostic Pricing',
    description:
      'Honest, transparent assessments. We pinpoint the specific failed component before any work begins, so you never pay for unnecessary parts.',
    icon: CheckCircle2,
  },
  {
    title: 'Root-Cause Mechanical Focus',
    description:
      'We repair whenever safe and practical. If a capacitor, contactor, or drain clearing restores your system, that is what we recommend—no high-pressure replacements.',
    icon: Wrench,
  },
];

export const LANDING_FAQS: LandingFaq[] = [
  {
    question: 'Why is my air conditioner running continuously but blowing warm or room-temperature air?',
    answer:
      'When the indoor blower fan runs but vents discharge lukewarm air, the outdoor condenser unit is typically failing to transfer heat. The most common causes diagnosed in Lawrenceville homes are a degraded dual-run capacitor preventing the compressor from starting, low refrigerant charge caused by a joint or coil leak, a stuck contactor switch, or a heavily iced evaporator coil blocking airflow.',
  },
  {
    question: 'How often should heating and air conditioning systems be serviced in Georgia?',
    answer:
      'Due to Georgia’s long, humid summers and sudden winter cold snaps, HVAC systems should be inspected twice a year: a cooling tune-up in spring (testing capacitors, cleaning coils, and clearing condensate traps) and a heating safety check in fall (inspecting heat exchangers, flame sensors, and electrical safeties).',
  },
  {
    question: 'How do I know whether to repair my cooling system or replace it entirely?',
    answer:
      'As a general rule, if your system is under 10–12 years old and the repair cost is a fraction of its value (such as replacing a fan motor, capacitor, or contactor), repair is the recommended choice. If the equipment is over 12–15 years old, uses phased-out R-22 refrigerant, or has suffered a burnt-out compressor or major coil rupture, upgrading to an energy-efficient modern system is usually more economical long-term.',
  },
  {
    question: 'How quickly can a technician dispatch across Lawrenceville and Gwinnett County?',
    answer:
      'Because our dispatch base is located right here in Lawrenceville (30046), service calls along Highway 120, Highway 29, Scenic Highway (GA-124), and Sugarloaf Parkway are scheduled promptly with direct technician communication rather than passing through automated third-party call centers.',
  },
  {
    question: 'What should I do if water is leaking around my indoor HVAC air handler closet?',
    answer:
      'Turn your system off at the thermostat immediately to prevent ceiling or floor damage. Water pooling typically means the condensate drain line is clogged with algae or sediment, or the drain pan is cracked. Running the system can cause the overflow to trip the safety float switch and shut off the AC, or worse, overflow into finished drywall.',
  },
];
