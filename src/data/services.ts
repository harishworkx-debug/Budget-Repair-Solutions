import {
  ClipboardCheck,
  Flame,
  Gauge,
  Snowflake,
  Thermometer,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { BUSINESS } from '@/config/business';

export type ServiceTag = 'cooling' | 'heating';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface DiagnosticStep {
  step: string;
  title: string;
  detail: string;
}

export interface TechnicalDeepDive {
  title: string;
  overview: string;
  points: { label: string; text: string }[];
}

export interface RepairVsReplaceFactor {
  factor: string;
  repair: string;
  replace: string;
}

export interface Service {
  slug: string;
  name: string;
  tags: ServiceTag[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  h1: string;
  summary: string;
  intro: string;
  symptomsTitle?: string;
  problems: string[];
  workIncludedTitle?: string;
  workIncluded: string[];
  deepDive?: TechnicalDeepDive;
  diagnosticProcess?: DiagnosticStep[];
  repairVsReplace?: RepairVsReplaceFactor[];
  faqs: ServiceFaq[];
}

export const SERVICES: Service[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    primaryKeyword: 'AC repair Lawrenceville GA',
    secondaryKeywords: [
      'Emergency AC repair',
      'AC not cooling',
      'Air conditioner troubleshooting',
      'Air conditioning repair Lawrenceville',
    ],
    seoTitle: 'AC Repair Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'AC not cooling, blowing warm air, or leaking? Call Budget Repair Solutions at (470) 348-6086 for reliable AC repair in Lawrenceville, GA. Direct technician support.',
    h1: 'Air Conditioning Repair in Lawrenceville, GA',
    tags: ['cooling'],
    icon: Snowflake,
    image: 'https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Outdoor air conditioning condenser unit mounted on a brick wall',
    summary: 'Diagnosis and repair when your air conditioner runs but no longer cools the way it should.',
    intro:
      'When an air conditioner stops cooling during a humid Georgia summer, the cause is rarely random. It is usually a specific mechanical or electrical failure: a low refrigerant charge from an undetected joint leak, a failing dual-run capacitor, a clogged evaporator coil, or a backed-up condensate drain tripping safety switches. Repair starts with structured diagnostic testing so you are never paying for parts that still work.',
    symptomsTitle: 'Signs Your Air Conditioner Needs Repair',
    problems: [
      'AC not blowing cold air: Unit runs continuously but vents discharge lukewarm or room-temperature air',
      'Air conditioner making unusual noises: Loud clicking on startup, high-pitched screeching, or electrical buzzing',
      'Refrigerant and airflow problems: Weak air volume trickling from supply registers and uneven room temperatures',
      'Frozen evaporator coil: Ice accumulating on indoor copper suction lines, air handler cabinet, or outdoor unit',
      'Water pooling around indoor air handler: Clogged condensate drain line backing up into the overflow drip pan',
      'Frequent short-cycling: Unit turns on for three minutes and shuts down before completing a full cooling cycle',
    ],
    workIncludedTitle: 'Our Comprehensive AC Diagnostic & Repair Scope',
    workIncluded: [
      'Refrigerant operating pressure testing (superheat & subcooling analysis)',
      'Dual-run capacitor microfarad ratings and compressor contactor load testing',
      'Evaporator and condenser coil airflow inspection and fin straightening',
      'Condensate drain line vacuum cleanout and safety overflow float switch testing',
      'Blower motor amp draw and indoor static pressure measurement',
      'Thermostat calibration and 24-volt transformer control circuit check',
    ],
    deepDive: {
      title: 'Common AC Problems in Georgia Homes',
      overview:
        'Georgia’s heat and 70%+ humidity subject cooling systems to extreme operational stress. Here is how our technicians diagnose the root cause:',
      points: [
        {
          label: 'Refrigerant Leaks vs. Undercharge',
          text: 'Air conditioners do not consume refrigerant like gasoline. If your system is low on refrigerant, there is a leak—often at copper brazed joints or aluminum evaporator coil bends. We use electronic leak detectors to locate leaks before recharging.',
        },
        {
          label: 'Capacitor & Contactor Failures',
          text: 'Run capacitors store electrical energy to start and run the compressor and fan. High Georgia summer temperatures degrade capacitor electrolyte, causing them to bulge and lose capacitance, leaving the outdoor compressor humming and unable to start.',
        },
        {
          label: 'Condensate Drain Line Backups',
          text: 'A typical Georgia central AC pulls 5 to 15 gallons of water out of the air each day. Mold and algae readily multiply in the drain line, creating gelatinous clogs that overflow the drain pan unless treated and cleared regularly.',
        },
      ],
    },
    diagnosticProcess: [
      {
        step: '01',
        title: 'Initial Intake & Symptom Review',
        detail:
          'We inspect the thermostat, review operating history, and listen to the outdoor and indoor units during startup to detect electrical or mechanical distress.',
      },
      {
        step: '02',
        title: 'Electrical & Mechanical Testing',
        detail:
          'Technicians measure operating voltages, motor capacitor microfarads, compressor amp draws, and check safety switches for continuity.',
      },
      {
        step: '03',
        title: 'Refrigeration Cycle Analysis',
        detail:
          'Using digital manifold gauges and pipe thermistors, we verify accurate superheat and subcooling measurements to assess compressor pumping efficiency and refrigerant volume.',
      },
      {
        step: '04',
        title: 'Transparent Repair & Verification',
        detail:
          'We explain the exact failing component in plain language, complete the repair with factory-grade parts, and test the supply-to-return temperature drop (16-20°F delta-T) before handoff.',
      },
    ],
    repairVsReplace: [
      {
        factor: 'System Age',
        repair: 'Unit is under 10-12 years old and has been serviced regularly',
        replace: 'Unit is 14+ years old and approaching the end of its design life',
      },
      {
        factor: 'Repair Cost',
        repair: 'Repair costs are under 30-40% of the replacement value',
        replace: 'Major failure (e.g. grounded compressor) exceeds 50% of system cost',
      },
      {
        factor: 'Refrigerant Type',
        repair: 'Modern R-410A system with readily available parts and refrigerant',
        replace: 'Obsolete R-22 Freon system where refrigerant costs are prohibitive',
      },
      {
        factor: 'Comfort & Efficiency',
        repair: 'Equipment still maintains even temperatures throughout the home',
        replace: 'Chronic hot rooms, rising energy bills, and multiple annual breakdowns',
      },
    ],
    faqs: [
      {
        question: 'Why is my air conditioner running but not cooling?',
        answer:
          'Common causes include a weak or blown run capacitor preventing the outdoor compressor from starting, low refrigerant from a joint or coil leak, a heavily clogged air filter choking airflow, or a frozen evaporator coil. A technician must check electrical connections and refrigerant pressures to determine the exact cause.',
      },
      {
        question: 'How do I know if my AC needs professional repair?',
        answer:
          'Clear signs include warm air blowing from vents, sudden loud noises (buzzing, grinding, or clicking), water pooling around your indoor furnace/air handler, ice on the copper lines, frequent breaker tripping, or utility bills jumping without a weather change.',
      },
      {
        question: 'Why is my air conditioner freezing up?',
        answer:
          'An AC freezes when the indoor coil drops below 32°F, causing moisture to turn into ice. This is caused either by choked airflow (a dirty air filter, blocked return grilles, or failing blower motor) or low refrigerant, which drops coil pressure and temperature.',
      },
      {
        question: 'How often should an air conditioning system be serviced?',
        answer:
          'In Georgia, cooling systems should receive a professional tune-up once each spring before summer heat arrives. Annual maintenance clears condensate lines, washes outdoor coils, tests capacitors, and prevents up to 85% of unexpected summer breakdowns.',
      },
      {
        question: 'When should I consider replacing my AC unit?',
        answer:
          'Consider replacement if your air conditioner is over 12-15 years old, uses phased-out R-22 Freon, requires frequent expensive repairs, or has suffered a major compressor burnout. We provide honest comparisons so you can make an informed financial decision.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    name: 'Air Conditioning Installation',
    primaryKeyword: 'AC installation Lawrenceville GA',
    secondaryKeywords: [
      'HVAC system replacement',
      'Air conditioner installation Lawrenceville',
      'New AC unit sizing',
      'Energy-efficient cooling upgrade',
    ],
    seoTitle: 'AC Installation Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Properly sized air conditioning installation and HVAC replacement in Lawrenceville, GA. Call Budget Repair Solutions at (470) 348-6086 for an honest cooling consultation.',
    h1: 'Air Conditioning Installation in Lawrenceville, GA',
    tags: ['cooling'],
    icon: Wind,
    image: 'https://images.pexels.com/photos/34887522/pexels-photo-34887522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wall-mounted air conditioner installed on a concrete wall',
    summary: 'Planning and installing a new air conditioning system sized for the home it will serve.',
    intro:
      'An air conditioner is only as efficient as its sizing, installation quality, and duct compatibility. Equipment that is oversized short-cycles, failing to dehumidify Georgia air and wearing out prematurely. Equipment that is undersized runs continuously on hot summer afternoons and never satisfies the thermostat. Our installation process begins with an accurate load review of your property to match the outdoor condenser and indoor evaporator coil perfectly.',
    symptomsTitle: 'When to Replace an Old Air Conditioner',
    problems: [
      'System is over 12-15 years old and struggling to maintain comfortable temperatures',
      'Frequent breakdowns and costly repair bills adding up each cooling season',
      'System operates on phased-out R-22 Freon, making minor repairs excessively expensive',
      'Compressor has locked up, burned out, or developed internal electrical grounding',
      'Skyrocketing summer power bills due to degraded, low-SEER legacy equipment',
      'Uneven cooling and high indoor humidity that tune-ups no longer resolve',
    ],
    workIncludedTitle: 'Complete AC Installation & Replacement Protocol',
    workIncluded: [
      'Manual J residential cooling load calculation and equipment capacity sizing',
      'Safe recovery and EPA-certified disposal of old equipment and refrigerant',
      'Level condenser pad placement and vibration-isolation mounting',
      'New indoor cased evaporator coil installation matched to system AHRI rating',
      'Brazing copper line set under nitrogen purge to prevent internal oxidation',
      'Triple-evacuation vacuum pull down below 500 microns to eliminate moisture',
      'Digital airflow verification, static pressure check, and thermostat integration',
    ],
    deepDive: {
      title: 'Energy Efficiency, SEER2 Standards & Sizing',
      overview:
        'Federal energy guidelines for the Southeast region require modern residential central air conditioners to meet strict SEER2 (Seasonal Energy Efficiency Ratio 2) standards:',
      points: [
        {
          label: 'Southeast SEER2 Mandate (Minimum 14.3 SEER2)',
          text: 'New systems installed in Georgia must meet minimum 14.3 SEER2 (equivalent to older 15 SEER) standards. Modern systems deliver significantly higher cooling output per kilowatt-hour of electricity, cutting cooling costs by 20-35%.',
        },
        {
          label: 'Manual J Cooling Load Calculations',
          text: 'Proper AC sizing is based on square footage, ceiling heights, window orientation, insulation R-values, and home shading. We ensure your system is accurately sized to prevent short-cycling and maintain optimal humidity removal.',
        },
        {
          label: 'Matched AHRI Systems',
          text: 'Replacing an outdoor condenser while leaving an incompatible older indoor coil lowers efficiency and risks early compressor failure. We install AHRI-matched outdoor and indoor pairs for verified performance.',
        },
      ],
    },
    diagnosticProcess: [
      {
        step: '01',
        title: 'Home Assessment & Heat Load Review',
        detail:
          'We evaluate your home layout, ductwork integrity, window exposures, and electrical panel capacity to determine the ideal system tonnage and SEER2 tier.',
      },
      {
        step: '02',
        title: 'Transparent Equipment Options',
        detail:
          'We present clear equipment choices—single-stage, two-stage, or variable-speed—matching your comfort goals and budget without sales gimmicks.',
      },
      {
        step: '03',
        title: 'Precision Mechanical Installation',
        detail:
          'Our technicians set equipment, run new copper line sets, connect electrical disconnects and whips, install secondary drain pans, and braze under dry nitrogen.',
      },
      {
        step: '04',
        title: 'Commissioning & Homeowner Walkthrough',
        detail:
          'We pull a deep vacuum, charge to exact subcooling specifications, test airflow at registers, program your thermostat, and walk you through system operation.',
      },
    ],
    repairVsReplace: [
      {
        factor: 'Equipment Lifespan',
        repair: 'Equipment is less than 10 years old with a minor electrical fault',
        replace: 'Equipment is 12-15+ years old and uses outdated R-22 refrigerant',
      },
      {
        factor: 'The $5,000 Rule',
        repair: 'Age of unit multiplied by repair cost is well under $5,000',
        replace: 'Age of unit multiplied by repair cost exceeds $5,000 (time to replace)',
      },
      {
        factor: 'Comfort & Humidity Control',
        repair: 'Home stays dry and comfortable once the failing part is swapped',
        replace: 'Home feels sticky, humid, and rooms are uneven even when the unit runs',
      },
    ],
    faqs: [
      {
        question: 'How do I know what size air conditioner my home needs?',
        answer:
          'AC capacity is measured in tons (1 ton = 12,000 BTUs). Sizing depends on square footage, insulation levels, window count, ceiling height, and climate exposure. An undersized unit will run constantly, while an oversized unit will short-cycle and leave the air clammy. We perform a heat load calculation to pinpoint the exact tonnage needed.',
      },
      {
        question: 'Can you replace only the outdoor condenser unit?',
        answer:
          'In some cases yes, but only if the indoor evaporator coil is compatible in age, refrigerant type (R-410A), and SEER2 ratings. Pairing a new condenser with an old, mismatched indoor coil usually invalidates manufacturer warranties and lowers efficiency.',
      },
      {
        question: 'What is SEER2 and why does it matter in Georgia?',
        answer:
          'SEER2 is the updated standard testing procedure for cooling efficiency. In the Southeast region, minimum residential AC standards are 14.3 SEER2. Upgrading from an older 10 SEER system to a 15-17 SEER2 system can reduce summer cooling bills by 25% to 40%.',
      },
      {
        question: 'How long does a complete AC installation take?',
        answer:
          'Most standard residential AC installations are completed in a single day (typically 6 to 8 hours). Complex jobs involving extensive ductwork modifications or dual-system changeouts may require additional time.',
      },
    ],
  },
  {
    slug: 'hvac-repair',
    name: 'HVAC Repair',
    primaryKeyword: 'HVAC repair Lawrenceville GA',
    secondaryKeywords: [
      'Heating and cooling repair',
      'Air conditioner troubleshooting',
      'Emergency HVAC fix',
      'Lawrenceville HVAC technician',
    ],
    seoTitle: 'HVAC Repair Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Comprehensive HVAC repair in Lawrenceville, GA. Troubleshooting heating and cooling systems, airflow issues, and controls. Call (470) 348-6086.',
    h1: 'Professional HVAC Repair in Lawrenceville, GA',
    tags: ['cooling', 'heating'],
    icon: Wrench,
    image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician using a manifold gauge to repair an outdoor air conditioner',
    summary: 'Repairs for heating and cooling systems when a single system is not performing as expected.',
    intro:
      'Because heating and cooling systems share identical ductwork, blower assemblies, and control wiring, an issue that appears in one season often stems from shared components. A blower motor failing in July will prevent your furnace from heating in December. Our whole-system HVAC repair approach inspects electrical, mechanical, and airflow pathways together to identify root causes and ensure year-round reliability.',
    symptomsTitle: 'Heating & Cooling Problems We Solve',
    problems: [
      'System short-cycling: Heating or AC shuts off within minutes of starting up',
      'Airflow and thermostat issues: Registers produce weak airflow or temperature settings drift',
      'Strange noises and system shutdowns: Grinding fan bearings, clicking relays, or vibrating sheet metal',
      'Rooms unevenly conditioned: Supply air is warm in some rooms and cool in others',
      'High utility bills: System running extended hours to achieve modest temperature shifts',
      'Safety switch cutouts: Drain float switches or furnace high-limit switches interrupting power',
    ],
    workIncludedTitle: 'Full-System HVAC Diagnostic & Repair Scope',
    workIncluded: [
      'Comprehensive electrical testing of contactors, relays, capacitors, and transformers',
      'Blower assembly inspection, wheel balance check, and motor amp draw testing',
      'Supply and return ductwork static pressure measurement across filter media',
      'Thermostat low-voltage wiring and control board sequencing verification',
      'Safety circuit inspection: limit switches, pressure switches, and condensate cutoffs',
      'Complete diagnostic report with itemized repair options',
    ],
    deepDive: {
      title: 'Whole-System Residential HVAC Troubleshooting',
      overview:
        'Modern heating and air systems operate on tightly coupled feedback loops between airflow, electrical signals, and mechanical components:',
      points: [
        {
          label: 'Airflow Restrictions & Static Pressure',
          text: 'Restricted airflow is the #1 killer of compressors and heat exchangers. Dirty filters or undersized returns cause air conditioning coils to freeze in summer and furnaces to trip high-limit switches in winter.',
        },
        {
          label: 'Low-Voltage Control Wiring (24V)',
          text: 'Thermostat communication faults, corroded wire nuts, or failing 24V transformers can intermittently drop contactor engagement, causing systems to cycle erratically or shut down completely.',
        },
        {
          label: 'Shared Blower Assemblies',
          text: 'Both gas heat and electric air conditioning depend on the indoor blower fan. Worn motor bearings or failing ECM control modules reduce airflow velocity and spike electrical consumption.',
        },
      ],
    },
    diagnosticProcess: [
      {
        step: '01',
        title: 'Whole-System Diagnostic Evaluation',
        detail:
          'We test both heating and cooling operational cycles, inspect safety interlocks, and measure electrical loads against manufacturer specifications.',
      },
      {
        step: '02',
        title: 'Root Cause Identification',
        detail:
          'We isolate whether the failure is electrical (capacitors, control board), mechanical (motors, valves), or airflow-related (static pressure, duct restrictions).',
      },
      {
        step: '03',
        title: 'Clear Repair Recommendations',
        detail:
          'We provide straightforward repair choices with upfront pricing and explain how the repair restores system balance.',
      },
    ],
    faqs: [
      {
        question: 'Do you repair both heating and air conditioning during the same visit?',
        answer:
          'Yes. Because both systems share the indoor air handler/furnace, blower wheel, ductwork, and thermostat, our technicians examine the shared components to ensure reliable operation in all seasons.',
      },
      {
        question: 'Why does my HVAC system turn on and off every few minutes?',
        answer:
          'Short cycling can indicate an oversized system, an overheated furnace tripping its high-limit switch, an AC freezing due to restricted airflow, or a malfunctioning thermostat sensor. We test operating temperatures and pressures to identify the trigger.',
      },
    ],
  },
  {
    slug: 'hvac-installation',
    name: 'HVAC Installation',
    primaryKeyword: 'HVAC installation Lawrenceville GA',
    secondaryKeywords: [
      'HVAC system replacement',
      'Heating and cooling system install',
      'New HVAC unit Lawrenceville',
      'Full system changeout',
    ],
    seoTitle: 'HVAC Installation Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Complete HVAC installation and system replacement in Lawrenceville, GA. Matched heating and cooling units sized for comfort. Call (470) 348-6086.',
    h1: 'HVAC Installation & System Replacement in Lawrenceville, GA',
    tags: ['cooling', 'heating'],
    icon: Thermometer,
    image: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern condenser unit installed on the exterior wall of a building',
    summary: 'Complete heating and cooling system installation, matched and sized for your building.',
    intro:
      'Replacing your heating and air conditioning system together provides the highest return on investment in comfort, energy efficiency, and warranty protection. A matched installation pairs a new outdoor unit with a properly calibrated indoor coil and furnace/air handler, eliminating duct incompatibilities and delivering balanced airflow across your home.',
    symptomsTitle: 'Signs It Is Time for Full System Replacement',
    problems: [
      'Both heating and cooling systems are over 12-15 years old and experiencing frequent failures',
      'Frequent repairs on multiple system components over consecutive seasons',
      'Energy costs climbing consistently despite regular filter changes and tune-ups',
      'Severe comfort imbalances between living areas, upstairs bedrooms, and basements',
      'System operates on phased-out refrigerant or has a compromised heat exchanger',
    ],
    workIncludedTitle: 'Complete HVAC Replacement & Commissioning',
    workIncluded: [
      'Full-home Manual J load calculation to size heating BTUs and cooling tonnage',
      'Removal, environmental evacuation, and recycling of legacy equipment',
      'Installation of matched furnace or air handler, evaporator coil, and outdoor unit',
      'Ductwork transition fabrication, mastic sealing, and static pressure balancing',
      'Condensate drain line installation with secondary overflow safety shutoffs',
      'Complete startup testing across heating and cooling modes before handoff',
    ],
    faqs: [
      {
        question: 'Should I replace heating and cooling at the same time?',
        answer:
          'In most cases, yes. Installing matched equipment ensures the indoor blower and outdoor compressor communicate efficiently, maximizing SEER2 and AFUE ratings and qualifying for full manufacturer warranties.',
      },
      {
        question: 'Will I need new ductwork when replacing my HVAC system?',
        answer:
          'Not necessarily. If your existing ducts are correctly sized, insulated, and sealed, they can usually be reused. If ducts are leaky, undersized, or damaged, we make necessary transitions to match the new equipment.',
      },
    ],
  },
  {
    slug: 'heating-repair',
    name: 'Heating Repair',
    primaryKeyword: 'Heating repair Lawrenceville GA',
    secondaryKeywords: [
      'Furnace not heating',
      'Heating troubleshooting',
      'Heater repair Lawrenceville',
      'Emergency heating service',
    ],
    seoTitle: 'Heating Repair Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Fast heating repair in Lawrenceville, GA. We troubleshoot lukewarm air, failing ignitions, and strange noises. Call Budget Repair Solutions at (470) 348-6086.',
    h1: 'Heating Repair & Emergency Heater Diagnostics in Lawrenceville, GA',
    tags: ['heating'],
    icon: Flame,
    image: 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician adjusting a heating system with precise instruments',
    summary: 'Repairs that restore reliable heat when your home is not warming up properly.',
    intro:
      'When cold winter snaps hit North Georgia, a heating failure is not just uncomfortable—it is an emergency. Heating repairs involve high-voltage electricity, gas lines, and combustion venting where safety is paramount. Our diagnostics verify ignition systems, flame sensors, draft pressure switches, and heat exchanger integrity before restoring steady heat to your home.',
    symptomsTitle: 'Common Heating Problems We Resolve',
    problems: [
      'Heating interruptions: Blower runs continuously but only blows cool or lukewarm air',
      'Failed ignition: Furnace clicks multiple times but burner fails to ignite or stays lit',
      'Strange odors: Persistent burning, sulfur, or electrical smells upon heating startup',
      'Rattling or banging sounds: Delayed ignition bangs or vibrating inducer fan motors',
      'Thermostat not triggering heat: Thermostat calls for heat but equipment remains silent',
    ],
    workIncludedTitle: 'Heating Diagnostic & Safety Check Scope',
    workIncluded: [
      'Ignition system and burner flame sensor testing and cleaning',
      'Gas valve pressure testing and manifold safety verification',
      'Draft inducer motor and draft pressure switch operational check',
      'Visual heat exchanger inspection for cracks or rollout evidence',
      'Blower capacitor and high-limit safety switch continuity testing',
    ],
    deepDive: {
      title: 'Heating Safety & Troubleshooting Priorities',
      overview:
        'Heating equipment combines gas combustion with high-volume air movement. Safety controls must function perfectly:',
      points: [
        {
          label: 'Heat Exchanger Integrity',
          text: 'A cracked heat exchanger can leak carbon monoxide into your household air. We inspect heat exchangers for thermal stress cracks, rust perforations, and burner flame distortion.',
        },
        {
          label: 'Limit Switch & Overheat Protection',
          text: 'When airflow is choked by a dirty air filter, furnace temperatures spike. The high-limit switch trips to shut down gas flow and prevent a fire. We test switch operation and restore proper airflow.',
        },
      ],
    },
    faqs: [
      {
        question: 'Why is my heater blowing cold air?',
        answer:
          'Common reasons include a dirty flame sensor failing to confirm flame, a tripped high-limit switch from a clogged filter, a failed hot surface ignitor, or a heat pump in defrost mode without auxiliary heat kicking in. Call us to test the ignition sequence.',
      },
      {
        question: 'Is a burning smell normal when the heat is turned on for the first time?',
        answer:
          'A mild burning dust smell that lasts 20-30 minutes during the first seasonal startup is normal as accumulated dust burns off heating elements. However, a persistent burning, plastic, or gas odor requires shutting the system down and scheduling an inspection immediately.',
      },
    ],
  },
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    primaryKeyword: 'Furnace repair Lawrenceville GA',
    secondaryKeywords: [
      'Furnace not heating',
      'Gas furnace troubleshooting',
      'Furnace short-cycling',
      'Electric furnace repair',
    ],
    seoTitle: 'Furnace Repair Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Expert furnace repair in Lawrenceville, GA for gas and electric systems. Burner, flame sensor, and blower motor diagnostics. Call (470) 348-6086.',
    h1: 'Furnace Repair & Ignition Troubleshooting in Lawrenceville, GA',
    tags: ['heating'],
    icon: Flame,
    image: 'https://images.pexels.com/photos/3736108/pexels-photo-3736108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician working on a furnace unit',
    summary: 'Focused furnace diagnostics and repair for gas and electric furnaces.',
    intro:
      'A gas or electric furnace delivers heat throughout your entire home through a sequence of automated safety checks. If any single component in that sequence fails—such as the inducer fan, the draft pressure switch, the hot surface ignitor, or the flame sensor—the control board locks the system out to prevent unburned gas accumulation. We specialize in diagnosing furnace control boards, burners, and airflow components.',
    symptomsTitle: 'Furnace Symptoms Requiring Expert Attention',
    problems: [
      'Ignition problems: Hot surface ignitor does not glow or burner shuts off after 3-5 seconds',
      'Dirty flame sensor lockouts: Furnace attempts to light three times and goes into hard lockout',
      'Airflow and draft restrictions: Inducer motor hums loudly or draft pressure switch fails to close',
      'Unusual furnace noises: Whistling, scraping, or screeching sounds from the blower wheel',
      'Furnace short-cycling: Unit ignites, runs for 2 minutes, and shuts down on high-temperature limit',
      'Blinking diagnostic LED codes: Control board flashes error codes indicating safety faults',
    ],
    workIncludedTitle: 'Specialized Furnace Repair & Service Scope',
    workIncluded: [
      'Flame sensor cleaning and micro-amp flame signal measurement',
      'Hot surface ignitor (HSI) resistance check and replacement',
      'Inducer motor amp draw and negative draft pressure testing',
      'Gas valve inlet and manifold pressure measurement',
      'Blower wheel cleaning, motor capacitor testing, and belt check',
      'Safety roll-out switch and primary high-limit switch verification',
    ],
    deepDive: {
      title: 'Understanding the Furnace Ignition Sequence',
      overview:
        'When your thermostat calls for heat, your furnace must complete every step in order:',
      points: [
        {
          label: '1. Draft Inducer Verification',
          text: 'The inducer fan starts to clear residual gases from the heat exchanger. The pressure switch closes to prove chimney draft.',
        },
        {
          label: '2. Ignitor & Gas Valve Activation',
          text: 'The hot surface ignitor heats up to 2,000°F. The gas valve opens, allowing gas to ignite across the burners.',
        },
        {
          label: '3. Flame Rectification',
          text: 'The flame sensor detects micro-amps of electrical current through the flame. If no flame is confirmed within 4 seconds, the gas valve shuts immediately for safety.',
        },
      ],
    },
    faqs: [
      {
        question: 'Why does my furnace turn on, light for a few seconds, and then turn off?',
        answer:
          'This is the classic symptom of a dirty or oxidized flame sensor. The furnace ignites successfully, but the control board cannot detect the flame signal and shuts off the gas to prevent gas buildup. Cleaning or replacing the flame sensor usually resolves this immediately.',
      },
      {
        question: 'How do I read the flashing light code on my furnace?',
        answer:
          'Most modern furnaces have an LED indicator on the control board visible through a sight glass. The pattern of flashes (e.g. 3 red flashes = pressure switch open) corresponds to an error code chart on the inside of the furnace door. Our technicians decode this to pinpoint the exact failure.',
      },
    ],
  },
  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    primaryKeyword: 'Furnace installation Lawrenceville GA',
    secondaryKeywords: [
      'Furnace replacement Lawrenceville',
      'New furnace install',
      'Energy-efficient gas furnace',
      'Furnace sizing Gwinnett',
    ],
    seoTitle: 'Furnace Installation Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Dependable furnace installation and replacement in Lawrenceville, GA. Properly sized heating units matched to your home. Call (470) 348-6086.',
    h1: 'Furnace Installation & Replacement in Lawrenceville, GA',
    tags: ['heating'],
    icon: Flame,
    image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician installing a heating system in a workshop',
    summary: 'New furnace installation sized to your home and matched to your existing ductwork.',
    intro:
      'Installing a new furnace is about safety, efficiency, and comfort. Upgrading to a modern gas furnace not only lowers winter gas bills but also provides whisper-quiet variable-speed airflow and steady warmth. We size each unit based on your home’s heat loss calculations, ensuring the equipment matches existing gas lines, flue venting, and duct sizing.',
    symptomsTitle: 'When to Replace Your Home’s Furnace',
    problems: [
      'Furnace is over 15-20 years old and nearing the end of safe operational life',
      'Heat exchanger has developed cracks, rust holes, or dangerous rollout risk',
      'Frequent winter repairs with parts becoming difficult or expensive to source',
      'Uneven heating leaving certain rooms or second floors consistently chilly',
      'Gas utility bills increasing without changes in winter weather or thermostat habits',
    ],
    workIncludedTitle: 'Furnace Replacement & Installation Standards',
    workIncluded: [
      'Accurate heat load review and AFUE efficiency equipment selection',
      'Safe removal and disposal of old furnace and venting',
      'New gas piping, shutoff valve, and flexible sediment trap connection',
      'Flue vent installation (metal B-vent or high-efficiency PVC condensing vent)',
      'Plenum duct transition fabrication and airtight mastic sealing',
      'Combustion analysis and carbon monoxide safety verification at startup',
    ],
    deepDive: {
      title: 'AFUE Efficiency Ratings: 80% vs. 96% Condensing Furnaces',
      overview:
        'AFUE (Annual Fuel Utilization Efficiency) measures how much gas is converted into usable heat:',
      points: [
        {
          label: '80% Standard Efficiency Furnaces',
          text: 'Vented through standard metal B-vents, 80% AFUE furnaces vent 20% of heat energy outdoors. They are reliable, economical replacements for standard attic installations.',
        },
        {
          label: '95-97% High-Efficiency Condensing Furnaces',
          text: 'Features a secondary stainless steel heat exchanger that extracts additional heat from flue gases. Vents cool exhaust through PVC pipes, capturing almost all usable heat and lowering gas bills significantly.',
        },
      ],
    },
    faqs: [
      {
        question: 'What size furnace does my Lawrenceville home need?',
        answer:
          'Furnace capacity is rated in BTUs. Oversized furnaces blast heat too quickly and short-cycle, causing hot and cold swings. Undersized units run continuously without reaching temperature. We calculate sizing based on square footage, insulation, and window area to install the right BTU capacity.',
      },
      {
        question: 'How long does a gas furnace usually last?',
        answer:
          'With annual maintenance, a quality gas furnace typically lasts 15 to 20 years. When a furnace exceeds 15 years and requires major repairs (such as a blower motor or heat exchanger), replacement is usually the smarter long-term investment.',
      },
    ],
  },
  {
    slug: 'heat-pump-repair',
    name: 'Heat Pump Repair',
    primaryKeyword: 'Heat pump repair Lawrenceville GA',
    secondaryKeywords: [
      'Heat pump not working',
      'Heat pump defrost troubleshooting',
      'Auxiliary heat running constantly',
      'Heat pump not cooling or heating',
    ],
    seoTitle: 'Heat Pump Repair Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Year-round heat pump repair in Lawrenceville, GA. Fixing reversing valves, defrost controls, coils, and refrigerant issues. Call (470) 348-6086.',
    h1: 'Heat Pump Repair & Dual-Season Service in Lawrenceville, GA',
    tags: ['cooling', 'heating'],
    icon: Gauge,
    image: 'https://images.pexels.com/photos/38067323/pexels-photo-38067323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern heat pump outdoor unit beside a contemporary building',
    summary: 'Repair for heat pumps that heat in winter and cool in summer.',
    intro:
      'A heat pump is a dual-season system: it cools your home in summer by extracting heat, and heats your home in winter by reversing the refrigerant flow to bring outdoor heat inside. Because it runs year-round, its reversing valve, defrost control board, and refrigerant balance must perform in every season. When a component fails, heating or cooling can stop working even if the outdoor fan is still spinning.',
    symptomsTitle: 'Signs Your Heat Pump Requires Service',
    problems: [
      'Heat pump not heating or cooling: Unit runs but blows room-temperature air in both seasons',
      'Reversing valve stuck: System remains stuck in cooling mode during winter or heating during summer',
      'Heavy ice buildup on outdoor unit: Outdoor coil encased in solid ice that fails to melt during defrost',
      'Auxiliary / Emergency heat running constantly: Electric heat strips stay engaged, causing electric bills to triple',
      'Unusual clicking or hissing noises: Reversing valve solenoid leaking or compressor valve failure',
      'Outdoor fan not spinning: Compressor runs but fan motor is seized or capacitor is blown',
    ],
    workIncludedTitle: 'Heat Pump Diagnostic & Repair Scope',
    workIncluded: [
      'Reversing valve solenoid coil electrical test and mechanical slide operation check',
      'Defrost control board, defrost thermostat, and sensor cycle verification',
      'Dual-direction refrigerant pressure checks across cooling and heating modes',
      'Auxiliary electric heat strip sequencer and limit switch testing',
      'Outdoor condenser coil cleaning and defrost drain clearing',
      'Thermostat heat pump configuration and emergency heat switch testing',
    ],
    deepDive: {
      title: 'Reversing Valves, Defrost Cycles & Refrigerant Balancing',
      overview:
        'Heat pumps operate differently than standard air conditioners. Understanding their specialized mechanics is key:',
      points: [
        {
          label: 'The 4-Way Reversing Valve',
          text: 'This valve reverses the flow of refrigerant. When energized by the thermostat, a magnetic solenoid slides an internal spool to switch from cooling to heating. If the valve sticks, the system cannot switch seasons.',
        },
        {
          label: 'The Winter Defrost Cycle',
          text: 'In winter, the outdoor coil drops below freezing and accumulates frost. The defrost board temporarily switches the system back to AC mode to send hot gas into the outdoor coil, melting the ice in 5-10 minutes while electric heat strips keep indoor air warm.',
        },
        {
          label: 'Auxiliary Heat Lockouts',
          text: 'Auxiliary heat strips provide supplemental heat when outdoor temperatures drop below 35°F. If your heat pump has a refrigerant leak, it will rely entirely on auxiliary heat strips, spiking your electric bill.',
        },
      ],
    },
    faqs: [
      {
        question: 'Why is there frost or ice on my outdoor heat pump in winter?',
        answer:
          'Light frost is normal during cold, damp winter mornings. The heat pump will automatically enter a defrost cycle every 30 to 90 minutes to melt the frost. However, if the unit is encased in a thick blanket of solid ice that does not melt, the defrost sensor, control board, or reversing valve has failed and needs immediate repair.',
      },
      {
        question: 'Why does my heat pump blow cool air when it is on heat?',
        answer:
          'Heat pumps deliver warm air at roughly 90°F to 95°F, which is lower than a gas furnace (120°F+). While this air will comfortably warm your home, if the air feels distinctly cold (below 80°F), the unit may be low on refrigerant, have a stuck reversing valve, or have failed heat strips.',
      },
      {
        question: 'What is the difference between Auxiliary Heat and Emergency Heat?',
        answer:
          'Auxiliary heat turns on automatically to supplement the heat pump on extremely cold nights. Emergency heat is a manual thermostat setting that shuts off the outdoor heat pump entirely and runs only the expensive electric heat strips—used only if the outdoor unit breaks down completely.',
      },
    ],
  },
  {
    slug: 'heat-pump-installation',
    name: 'Heat Pump Installation',
    primaryKeyword: 'Heat pump installation Lawrenceville GA',
    secondaryKeywords: [
      'Heat pump replacement',
      'Dual fuel HVAC installation',
      'Energy-efficient heat pump upgrade',
      'Year-round climate control',
    ],
    seoTitle: 'Heat Pump Installation Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Professional heat pump installation in Lawrenceville, GA. High-efficiency dual-season heating and cooling systems. Call (470) 348-6086.',
    h1: 'Heat Pump Installation & Dual-Fuel Solutions in Lawrenceville, GA',
    tags: ['cooling', 'heating'],
    icon: Gauge,
    image: 'https://images.pexels.com/photos/20046692/pexels-photo-20046692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Outdoor air source unit mounted on a residential building',
    summary: 'Heat pump installation that provides both heating and cooling from one system.',
    intro:
      'Modern heat pumps represent the pinnacle of all-electric and dual-fuel climate control. Advanced inverter-driven compressors provide whisper-quiet cooling during humid Georgia summers and efficient, comfortable heating during winter. We size and install high-efficiency heat pumps engineered specifically for our Southeast climate.',
    symptomsTitle: 'When to Upgrade to a Heat Pump',
    problems: [
      'Replacing separate, aging heating and cooling equipment with one unified system',
      'Desire to eliminate reliance on fossil fuels or reduce winter heating costs',
      'Current heat pump is 12-15+ years old and using expensive auxiliary heat constantly',
      'Upgrading to high-efficiency inverter technology for whisper-quiet outdoor operation',
    ],
    workIncludedTitle: 'Heat Pump Installation & Configuration Scope',
    workIncluded: [
      'Dual-season Manual J heating and cooling load calculation',
      'Outdoor inverter heat pump placement on elevated snow/drain stand',
      'Indoor air handler installation with matched auxiliary electric heat package',
      'Refrigerant line set installation, nitrogen purge, and deep vacuum evacuation',
      'Smart communicating heat pump thermostat setup and balance point calibration',
    ],
    faqs: [
      {
        question: 'Can a heat pump handle freezing Georgia winter weather?',
        answer:
          'Yes. Modern heat pumps operate efficiently down to 25°F or lower without losing heating capacity. For the rare occasions when Georgia temperatures drop below freezing, auxiliary electric heat strips or dual-fuel gas backups provide seamless supplemental heat.',
      },
      {
        question: 'What is a Dual-Fuel HVAC system?',
        answer:
          'A dual-fuel system pairs an electric heat pump with a high-efficiency gas furnace. The heat pump provides efficient heating and cooling for 85% of the year, while the gas furnace automatically takes over during sub-freezing winter snaps when gas heat is more cost-effective.',
      },
    ],
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance and Tune-Ups',
    primaryKeyword: 'HVAC maintenance Lawrenceville GA',
    secondaryKeywords: [
      'Seasonal HVAC tune-up',
      'AC maintenance Lawrenceville',
      'Furnace tune-up Lawrenceville',
      'Preventive heating and cooling service',
    ],
    seoTitle: 'HVAC Maintenance Lawrenceville GA | Seasonal Tune-Ups | Budget Repair',
    seoDescription:
      'Seasonal HVAC maintenance and tune-ups in Lawrenceville, GA. Coil cleaning, capacitor testing, and airflow checks to stop unexpected breakdowns. Call (470) 348-6086.',
    h1: 'HVAC Maintenance & Seasonal Tune-Ups in Lawrenceville, GA',
    tags: ['cooling', 'heating'],
    icon: ClipboardCheck,
    image: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting an outdoor HVAC unit during a maintenance visit',
    summary: 'Seasonal tune-ups that keep heating and cooling running efficiently and catch small problems early.',
    intro:
      'Routine maintenance is the single most effective way to prevent catastrophic summer AC breakdowns and unexpected winter heating failures. A comprehensive 21-point seasonal inspection identifies weakened capacitors, dirty coils, loose electrical connections, and clogged condensate lines before they cause major system shutdowns during 95°F heatwaves.',
    symptomsTitle: 'Signs Your System Is Overdue for Maintenance',
    problems: [
      'Heating and cooling bills climbing month after month with no change in usage',
      'Dust, pollen, and debris visibly coating the outdoor condenser coil fins',
      'Airflow from vents feels weaker or takes longer to reach the set temperature',
      'No maintenance inspection performed in the past 12 months',
      'System squeaks, hums loudly, or vibrates noticeably during startup',
    ],
    workIncludedTitle: '21-Point Multi-Point Seasonal Inspection Checklist',
    workIncluded: [
      'Precision capacitor testing against manufacturer microfarad tolerances',
      'Outdoor condenser coil cleaning to remove dirt, pine needles, and pollen',
      'Condensate drain line flush and algae tablet treatment to prevent pan overflows',
      'Compressor contactor inspection for electrical pitting and insect intrusion',
      'Blower wheel, motor amp draw, and air filter inspection',
      'Refrigerant operating pressure review and temperature split measurement',
      'Thermostat calibration and safety disconnect switch testing',
    ],
    faqs: [
      {
        question: 'How often should my HVAC system receive maintenance?',
        answer:
          'In Georgia, systems should be inspected twice a year: once in spring for the air conditioning system, and once in autumn for the heating system. This dual-season approach ensures equipment is prepped before peak weather.',
      },
      {
        question: 'Does preventive maintenance really lower electric bills?',
        answer:
          'Yes. Dirty coils and low refrigerant force compressors to work 20% to 30% harder to transfer heat. Clean coils, lubricated motors, and correct refrigerant charges restore equipment to peak factory efficiency, saving noticeable dollars on monthly utility bills.',
      },
    ],
  },
  {
    slug: 'thermostat-installation',
    name: 'Thermostat Installation and Repair',
    primaryKeyword: 'Thermostat installation Lawrenceville GA',
    secondaryKeywords: [
      'Smart thermostat installation',
      'Thermostat troubleshooting',
      'Digital thermostat wiring',
      'Thermostat replacement Lawrenceville',
    ],
    seoTitle: 'Thermostat Installation Lawrenceville GA | Budget Repair Solutions',
    seoDescription:
      'Smart thermostat installation, setup, and repair in Lawrenceville, GA. Ensure precision temperature control and reliable HVAC communication. Call (470) 348-6086.',
    h1: 'Thermostat Installation & Smart Climate Controls in Lawrenceville, GA',
    tags: ['cooling', 'heating'],
    icon: Gauge,
    image: 'https://images.pexels.com/photos/8293646/pexels-photo-8293646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting a vent and airflow in a building interior',
    summary: 'Thermostat installation and repair so your system responds to the temperatures you set.',
    intro:
      'The thermostat is the brain of your heating and air conditioning system. When it reads temperatures incorrectly, loses power, or miscommunicates staging signals, your equipment short-cycles, runs inefficiently, or fails to start. We install and service smart thermostats (Google Nest, Ecobee, Honeywell Home) and ensure proper C-wire power delivery and staging control.',
    symptomsTitle: 'Thermostat Problems We Troubleshoot',
    problems: [
      'Thermostat display is completely blank, unresponsive, or flashing low-battery',
      'Temperature on the wall does not match the actual room temperature',
      'System does not respond when switching between heating and cooling modes',
      'Smart thermostat loses Wi-Fi connection or frequently reboots due to lack of a C-wire',
      'Heat pump auxiliary heat turns on when standard cooling or mild heat is requested',
    ],
    workIncludedTitle: 'Thermostat Installation & Wiring Scope',
    workIncluded: [
      'Thermostat compatibility assessment (single-stage, multi-stage, heat pump, or dual-fuel)',
      'Dedicated 24V common wire (C-wire) installation or power extender kit setup',
      'Precision digital temperature sensor calibration and level wall mounting',
      'Heating and cooling staging verification (Y1, Y2, W1, W2, O/B reversing valve)',
      'Mobile app connectivity walkthrough and custom energy-saving schedule programming',
    ],
    faqs: [
      {
        question: 'Why does a smart thermostat need a C-wire (Common Wire)?',
        answer:
          'Smart thermostats with Wi-Fi screens require continuous 24-volt power. Without a dedicated C-wire, the thermostat tries to "power steal" from the heating or cooling circuits, which frequently causes reboots, short-cycling, or blown control board fuses. We can run a new C-wire or install an authorized power module.',
      },
      {
        question: 'Can any smart thermostat work with my heat pump system?',
        answer:
          'Most can, but the thermostat must support heat pump reversing valve logic (O/B terminal) and auxiliary/emergency heat staging. Incorrect configuration can cause heat pumps to blow freezing air in winter or auxiliary heat strips to run constantly.',
      },
    ],
  },
];

export function findServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function serviceUrl(service: Service) {
  return `/${service.slug}-${BUSINESS.locationSlug}`;
}

export function servicesWithTag(tag: ServiceTag) {
  return SERVICES.filter((service) => service.tags.includes(tag));
}
