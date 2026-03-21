# SVG Assets — אתר בקליק Landing Pages

All SVGs are custom-crafted, royalty-free, and JSX-ready (no `class=` attributes used).
Total: 10 files, ~61KB combined.

## SVG Files

| Business | File | Size | Description |
|----------|------|------|-------------|
| מסעדת הים התיכון (Restaurant) | `svgs/restaurant.svg` | 4.4KB | Dining scene: table with Mediterranean food, wine glass, bread basket, waiter figure, hanging lamp, olive branch decoration |
| הספר של יוסי (Barbershop) | `svgs/barbershop.svg` | 4.8KB | Barber shop front: animated barber pole, barber chair with customer, Yossi the barber with scissors, product shelf, star rating |
| משרד עורכי דין (Lawyer) | `svgs/lawyer.svg` | 6.4KB | Law office: bookshelf wall, scale of justice, gavel, signed contract with seal, suited lawyer with briefcase, office nameplate |
| PowerFit Tel Aviv (Gym) | `svgs/gym.svg` | 5.5KB | Dark gym: athlete pressing barbell overhead, weights rack, treadmill, dumbbells on floor, heart rate monitor display, energy sparks |
| ד״ר שרה לוי (Dentist) | `svgs/dentist.svg` | 5.7KB | Dental clinic: patient in dental chair, Dr. Sara Levi in mask, dental light, tool tray with instruments, friendly illustrated tooth with roots |
| דני נדל״ן (Real Estate) | `svgs/realestate.svg` | 5.4KB | Sunny suburban scene: modern house with garage, garden, for-sale sign, Danny the agent with property document, tree and bushes |
| רון צלמות (Photographer) | `svgs/photographer.svg` | 5.9KB | Photography studio: Hollywood lighting setup, elegant female subject against backdrop, Ron behind DSLR on tripod, portfolio photos on wall |
| חשמל אמין (Electrician) | `svgs/electrician.svg` | 7.3KB | Electrical work: blueprint wiring diagram, breaker panel with breakers, hi-vis electrician with hard hat using screwdriver, lightning bolt symbol, tool belt |
| גלאם סטודיו (Beauty) | `svgs/beauty.svg` | 8.5KB | Beauty salon vanity: Hollywood mirror with glowing bulbs, woman's reflection with dramatic makeup, beauty product collection (lipstick, mascara, perfume, eyeshadow palette), rose |
| ד״ר מתמטיקה (Tutor) | `svgs/tutor.svg` | 7.5KB | Classroom: chalkboard with quadratic equations and parabola graph, professor in doctoral gown with pointer and textbook, student at desk with notebook, A+ grade stamp |

## File Paths (absolute)

```
/workspace/group/atar-bclick/assets/svgs/restaurant.svg
/workspace/group/atar-bclick/assets/svgs/barbershop.svg
/workspace/group/atar-bclick/assets/svgs/lawyer.svg
/workspace/group/atar-bclick/assets/svgs/gym.svg
/workspace/group/atar-bclick/assets/svgs/dentist.svg
/workspace/group/atar-bclick/assets/svgs/realestate.svg
/workspace/group/atar-bclick/assets/svgs/photographer.svg
/workspace/group/atar-bclick/assets/svgs/electrician.svg
/workspace/group/atar-bclick/assets/svgs/beauty.svg
/workspace/group/atar-bclick/assets/svgs/tutor.svg
```

## Usage in React/JSX

Each SVG is inline-compatible. To use as an `<img>`:
```jsx
import RestaurantSvg from './assets/svgs/restaurant.svg';
<img src={RestaurantSvg} alt="מסעדת הים התיכון" />
```

To inline (for color customization via CSS/props), copy the SVG content directly into JSX. All SVGs use `fill` and `stroke` attributes directly (no `class=` attributes), so they work as-is in JSX.

## Color Themes Used

| Business | Primary Colors | Mood |
|----------|---------------|------|
| Restaurant | Warm terracotta, cream, olive green | Mediterranean warmth |
| Barbershop | Navy, red/white/blue (barber pole) | Classic, trustworthy |
| Lawyer | Deep wood browns, gold, dark navy | Authority, prestige |
| Gym | Dark navy, red, electric blue | Power, energy |
| Dentist | Sky blue, clean white | Clinical, clean |
| Real Estate | Sky blue, warm white, grass green | Bright, optimistic |
| Photographer | Near-black studio, gold lights | Premium, dramatic |
| Electrician | Dark slate, amber/yellow | Technical, alert |
| Beauty | Soft pink, champagne gold | Elegant, luxurious |
| Tutor | School blue, chalkboard green | Academic, approachable |

## Source

All illustrations created as original SVG artwork (custom-built for this project).
License: Free to use for the אתר בקליק project. No attribution required.
