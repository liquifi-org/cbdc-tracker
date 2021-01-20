import { ICON_NAMES } from './constants'
import NextButton from './bootstrap/NextButton'
import PreviousButton from './bootstrap/PreviousButton'
import ArrowLink from './bootstrap/ArrowLink'
import Calendar from './bootstrap/Calendar'
import SourceLink from './bootstrap/SourceLink'
import ShowMore from './bootstrap/ShowMore'
import Tag from './bootstrap/Tag'
import Facebook from './bootstrap/Facebook'
import Instagram from './bootstrap/Instagram'
import Twitter from './bootstrap/Twitter'
import Github from './bootstrap/Github'
import Clear from './bootstrap/Clear'
import Menu from './bootstrap/Menu'
import CloseMenu from './bootstrap/CloseMenu'
import WatchlistSelectedItem from './bootstrap/WatchlistSelectedItem'
import WatchlistUnselectedItem from './bootstrap/WatchlistUnselectedItem'
import Watchlist from './bootstrap/Watchlist'
import Info from './bootstrap/Info'
import ArrowRight from './bootstrap/ArrowRight'
import Update from '@/components/icons/bootstrap/Update'
import Add from '@/components/icons/bootstrap/Add'
import Delete from '@/components/icons/bootstrap/Delete'
import EditColumns from '@/components/icons/bootstrap/EditColumns'
import ArrowLinkBack from '@/components/icons/bootstrap/ArrowLinkBack'
import ExternalLink from '@/components/icons/bootstrap/ExternalLink'
import Linkedin from '@/components/icons/bootstrap/Linkedin'
import ArrowRightSquare from '@/components/icons/bootstrap/ArrowRightSquare'
import Expand from '@/components/icons/bootstrap/Expand'
import Collapse from '@/components/icons/bootstrap/Collapse'
import SortDesc from '@/components/icons/bootstrap/SortDesc'
import SortAsc from '@/components/icons/bootstrap/SortAsc'
import Sort from '@/components/icons/bootstrap/Sort'
import CheckMark from '@/components/icons/bootstrap/CheckMark'

export class Resolver {
  static resolve (name) {
    switch (name) {
      case ICON_NAMES.NEXT_BUTTON:
        return NextButton
      case ICON_NAMES.PREVIOUS_BUTTON:
        return PreviousButton
      case ICON_NAMES.ARROW_LINK:
        return ArrowLink
      case ICON_NAMES.ARROW_LINK_BACK:
        return ArrowLinkBack
      case ICON_NAMES.CALENDAR:
        return Calendar
      case ICON_NAMES.SOURCE_LINK:
        return SourceLink
      case ICON_NAMES.SHOW_MORE:
        return ShowMore
      case ICON_NAMES.TAG:
        return Tag
      case ICON_NAMES.FACEBOOK:
        return Facebook
      case ICON_NAMES.GITHUB:
        return Github
      case ICON_NAMES.INSTAGRAM:
        return Instagram
      case ICON_NAMES.TWITTER:
        return Twitter
      case ICON_NAMES.LINKEDIN:
        return Linkedin
      case ICON_NAMES.CLEAR:
        return Clear
      case ICON_NAMES.MENU:
        return Menu
      case ICON_NAMES.CLOSE_MENU:
        return CloseMenu
      case ICON_NAMES.WATCHLIST:
        return Watchlist
      case ICON_NAMES.WATCHLIST_SELECTED_ITEM:
        return WatchlistSelectedItem
      case ICON_NAMES.WATCHLIST_UNSELECTED_ITEM:
        return WatchlistUnselectedItem
      case ICON_NAMES.INFO:
        return Info
      case ICON_NAMES.ARROW_RIGHT:
        return ArrowRight
      case ICON_NAMES.ARROW_RIGHT_SQUARE:
        return ArrowRightSquare
      case ICON_NAMES.UPDATE:
        return Update
      case ICON_NAMES.ADD:
        return Add
      case ICON_NAMES.DELETE:
        return Delete
      case ICON_NAMES.EDIT_COLUMNS:
        return EditColumns
      case ICON_NAMES.EXTERNAL_LINK:
        return ExternalLink
      case ICON_NAMES.EXPAND:
        return Expand
      case ICON_NAMES.COLLAPSE:
        return Collapse
      case ICON_NAMES.SORT:
        return Sort
      case ICON_NAMES.SORT_ASC:
        return SortAsc
      case ICON_NAMES.SORT_DESC:
        return SortDesc
      case ICON_NAMES.CHECK_MARK:
        return CheckMark
      default:
        throw new Error(`Unknown icon: ${name}`)
    }
  }
}
