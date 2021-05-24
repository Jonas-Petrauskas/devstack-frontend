
export interface Message {
  company_id: string,
  developer_id: string,
  timestamp: Date,
  text_content: string,
  is_from_developer: boolean,
  was_read_by_company: boolean,
  was_read_by_developer: boolean
}

export const defaultMessage: Message = {
  company_id: '',
  developer_id: '',
  timestamp: new Date(0),
  text_content: '',
  is_from_developer: false,
  was_read_by_company: false,
  was_read_by_developer: false
}
