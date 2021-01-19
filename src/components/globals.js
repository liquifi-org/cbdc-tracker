import Vue from 'vue'
import Button from '@/components/buttons/Button'
import StringInput from '@/components/fields/StringInput'
import YearRange from '@/components/fields/YearRange'
import MultipleSelect from '@/components/fields/multipleSelect/MultipleSelect'
import FieldLabel from '@/components/fields/FieldLabel'
import Status from '@/components/status/Status'
import Table from '@/components/table/Table'
import ArrowLink from '@/components/links/ArrowLink'
import Link from '@/components/links/Link'
import ArrowLinkBack from '@/components/links/ArrowLinkBack'
import ExternalLink from '@/components/links/ExternalLink'
import SocialNetworkLink from '@/components/links/SocialNetworkLink'
import Card from '@/components/cards/Card'
import CardLine from '@/components/cards/CardLine'
import CardList from '@/components/cards/CardList'
import ListCard from '@/components/cards/ListCard'
import ClearButton from '@/components/buttons/ClearButton'
import Title from '@/components/Title'
import WatchFlag from '@/components/WatchFlag'
import Icon from '@/components/icons/Icon'
import IconButton from '@/components/buttons/IconButton'
import Spinner from '@/components/Spinner'
import Image from '@/components/Image'
import ShowMoreButton from '@/components/buttons/ShowMoreButton'
import UpdateRate from '@/components/UpdateRate'
import InteroperabilityValue from '@/components/InteroperabilityValue'
import Info from '@/components/Info'
import Pagination from '@/components/Pagination'
import CollapseButton from '@/components/collapse/CollapseButton'
import CollapseBlock from '@/components/collapse/CollapseBlock'
import EmailInput from '@/components/fields/EmailInput'
import Modal from '@/components/modal/Modal'

// Use globals for small components that plan use on most pages
const components = [{
  name: 'app-icon',
  component: Icon
}, {
  name: 'app-icon-button',
  component: IconButton
}, {
  name: 'app-button',
  component: Button
}, {
  name: 'app-show-more-button',
  component: ShowMoreButton
}, {
  name: 'app-clear-button',
  component: ClearButton
}, {
  name: 'app-field-label',
  component: FieldLabel
}, {
  name: 'app-string-input',
  component: StringInput
}, {
  name: 'app-year-range',
  component: YearRange
}, {
  name: 'app-multiple-select',
  component: MultipleSelect
}, {
  name: 'app-email-input',
  component: EmailInput
}, {
  name: 'app-status',
  component: Status
}, {
  name: 'app-table',
  component: Table
}, {
  name: 'app-pagination',
  component: Pagination
}, {
  name: 'app-arrow-link',
  component: ArrowLink
}, {
  name: 'app-arrow-link-back',
  component: ArrowLinkBack
}, {
  name: 'app-social-network-link',
  component: SocialNetworkLink
}, {
  name: 'app-card',
  component: Card
}, {
  name: 'app-card-line',
  component: CardLine
}, {
  name: 'app-card-list',
  component: CardList
}, {
  name: 'app-list-card',
  component: ListCard
}, {
  name: 'app-title',
  component: Title
}, {
  name: 'app-watch-flag',
  component: WatchFlag
}, {
  name: 'app-spinner',
  component: Spinner
}, {
  name: 'app-image',
  component: Image
}, {
  name: 'app-update-rate',
  component: UpdateRate
}, {
  name: 'app-interoperability-value',
  component: InteroperabilityValue
}, {
  name: 'app-link',
  component: Link
}, {
  name: 'app-info',
  component: Info
}, {
  name: 'app-external-link',
  component: ExternalLink
}, {
  name: 'app-collapse-block',
  component: CollapseBlock
}, {
  name: 'app-collapse-button',
  component: CollapseButton
}, {
  name: 'app-modal',
  component: Modal
}]

components.forEach((v) => {
  Vue.component(v.name, v.component)
})
