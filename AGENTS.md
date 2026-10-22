## Project rules

- Shared site chrome (Header/Footer) lives in src/components/site and is mounted in __root; pages compose `ui.tsx` primitives so styling stays consistent.
- UI is built on shadcn primitives (src/components/ui) and Magic UI/21st.dev-style components (src/components/magic); new UI should use these instead of hand-rolled markup.
- Unconfirmed business facts render through `OwnerNote`; fictional preview entries live in a browser-safe demo-content module and carry local sample labels, so preview material cannot be mistaken for verified claims.
- The shared root wraps all pages in a single site-sheet; reference-specific homepage styles are scoped under named classes in the global stylesheet so other routes retain shared primitives.
- Service-specific illustrative outputs and FAQs live in a browser-safe content module consumed by ServicePage, keeping scope caveats consistent across service pages.
- Text emphasis uses the shared MarkerText primitive; reveal and marker animations honor reduced-motion preferences and run once to avoid distracting loops.
- Animated page backgrounds use one shared `Grainient` in the root sheet, backed by the accessible `ShaderCanvas` lifecycle and theme-token fallback; this keeps all pages consistent and avoids duplicate GPU loops or blank backgrounds.
- Shared cards use global semantic hover/focus shadow tokens without per-card pointer listeners; this keeps interactions consistent and inexpensive.
- Serve artwork as resized WebP with asynchronous decoding; bound background render dimensions and draw frequency so long pages do not allocate oversized graphics buffers.
