const DOCUMENT_DEFAULT_TITLE = 'C.D.B.C.'

export class DocumentTitleService {
  setTitle (text) {
    document.title = text || DOCUMENT_DEFAULT_TITLE
  }
}
