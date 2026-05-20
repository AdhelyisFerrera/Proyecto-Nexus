# Arquitectura de Nexus

## Objetivo

La arquitectura de Nexus está diseñada para ser:
- escalable
- mantenible
- modular
- organizada

## Estructura Base

src/
├── assets/
├── components/
├── context/
├── firebase/
├── hooks/
├── layouts/
├── lib/
├── pages/
├── routes/
├── services/
├── styles/
├── types/
└── utils/

## Convenciones

- Componentes reutilizables en `components/ui`
- Layouts globales en `layouts`
- Pantallas completas en `pages`
- Hooks personalizados en `hooks`
- Tipos TypeScript globales en `types`
- Funciones auxiliares en `utils`

## Escalabilidad

La estructura está preparada para:
- autenticación
- manejo de estado global
- Firebase
- exportación PDF
- futuras integraciones