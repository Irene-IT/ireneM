// import {
//   Contacts as ContactType,
//   allContacts,
// } from '../.contentlayer/generated'
// import ContactsPostCard from './ContactPostCard'



// export default function ContactsSection() {

//   return (
//     <div className="grid md:grid-cols-2 gap-4 flex-wrap">
//       {contacts.map((contactsItem) => {
//         return (
//           <ContactsPostCard
//             key={contactsItem.title}
//             post={contactsItem as ContactType}
//           />
//         )
//       })}
//     </div>
//   )
// }


import {
  Contacts as ContactType,
  allContacts,
} from '../.contentlayer/generated'
import ContactsPostCard from './ContactPostCard'

export default function ContactsSection() {
  return (
    // <div className="grid md:grid-cols-2 gap-4 flex-wrap">
    <div className="grid md:grid-cols-4 w-full gap-4 flex-wrap">
      {allContacts.map((contactsItem) => (
        <ContactsPostCard
          key={contactsItem._id}
          post={contactsItem as ContactType}
        />
      ))}
    </div>
  )
}
