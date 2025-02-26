export const STATUS_NAMES = {
  RESEARCH: 'Research',
  DEVELOPMENT: 'Development',
  PROOF_OF_CONCEPT: 'Proof of concept',
  PILOT: 'Pilot',
  LAUNCHED: 'Launched',
  CANCELLED: 'Cancelled',
  INACTIVE: 'Inactive',
  NONE: 'None'
}

export const STATUS_COLOR = {
  [`${STATUS_NAMES.RESEARCH}`]: '#B5DED7',
  [`${STATUS_NAMES.DEVELOPMENT}`]: '#AFA3DA',
  [`${STATUS_NAMES.PROOF_OF_CONCEPT}`]: '#AFA3DA',
  [`${STATUS_NAMES.PILOT}`]: '#F1CDB2',
  [`${STATUS_NAMES.LAUNCHED}`]: '#67A8EF',
  [`${STATUS_NAMES.CANCELLED}`]: '#EC8596',
  [`${STATUS_NAMES.INACTIVE}`]: '#9D9CA6',
  [`${STATUS_NAMES.NONE}`]: '#F4F8FC'
}

export const STATUS_BORDER_COLOR = {
  [`${STATUS_NAMES.RESEARCH}`]: '#6BBEAF',
  [`${STATUS_NAMES.DEVELOPMENT}`]: '#8F81C7',
  [`${STATUS_NAMES.PROOF_OF_CONCEPT}`]: '#8F81C7',
  [`${STATUS_NAMES.PILOT}`]: '#E4A57C',
  [`${STATUS_NAMES.LAUNCHED}`]: '#4E87D3',
  [`${STATUS_NAMES.CANCELLED}`]: '#D53E45',
  [`${STATUS_NAMES.INACTIVE}`]: '#4C4A5D',
  [`${STATUS_NAMES.NONE}`]: '#DBE6F1'
}

export const STATUS_DESCRIPTION = {
  [`${STATUS_NAMES.RESEARCH}`]: 'This stage involves exploring the potential of a CBDC through studies and analysis. Governments assess the feasibility, benefits, and risks associated with implementing a CBDC.',
  [`${STATUS_NAMES.PROOF_OF_CONCEPT}`]: 'During this phase, the technical and regulatory framework for a CBDC is being designed and constructed. This includes creating prototypes and initial testing.',
  [`${STATUS_NAMES.PILOT}`]: 'In the pilot phase, limited real-world testing of the CBDC takes place. This helps to identify practical issues and gather feedback from a controlled group of users.',
  [`${STATUS_NAMES.LAUNCHED}`]: 'A CBDC in this stage is officially introduced and made available for public use, having passed through previous stages of development and testing.',
  [`${STATUS_NAMES.CANCELLED}`]: 'Plans for developing or launching a CBDC have been abandoned, and no further actions will be taken.',
  [`${STATUS_NAMES.INACTIVE}`]: 'Activities related to the CBDC have been paused. There is no ongoing development or research, but the project may resume in the future.'
}
