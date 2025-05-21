"use client";

import "./cssStyles";
import DocViewer from "./DocViewer";
import { usePDFControls } from "./hooks/usePDFControls";
import { DocViewerProvider } from "./store/DocViewerProvider";

export default DocViewer;
export { DocViewerRenderers } from "./renderers";
export * from "./models";
export * from "./utils/fileLoaders";
export { type AvailableLanguages, supportedLanguages } from "./i18n";
export * from "./renderers";

export { usePDFControls, DocViewerProvider };
