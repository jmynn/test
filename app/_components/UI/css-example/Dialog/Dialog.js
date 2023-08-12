'use client'
import { useRef } from 'react'
import styles from './Dialog.module.scss'

export default function Dialog(){
  const modal = useRef()
  return(
     <>
      <button onClick={() => modal.current.showModal()} className={styles.show}>Open modal(у меня не кликабельный бэкграунд)</button>
      <dialog ref={modal} className={styles.dialog}>
        <button onClick={() => modal.current.close()}>Close</button>
        <div className={styles.title}>У меня есть overscroll</div>
        <div className={styles.text}>
          Я текст ** Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis ut deleniti ducimus rem, mollitia eius optio fugit, illum laboriosam adipisci repellat earum ea accusantium quaerat doloremque aspernatur quis illo asperiores dolorem expedita. Similique, nemo esse commodi deserunt veniam voluptatem molestias aspernatur exercitationem ipsam. Vel ipsum laudantium cupiditate explicabo vero ea nam inventore distinctio, libero dolorum velit optio. Quis dolore voluptatibus ducimus exercitationem reprehenderit ratione placeat quod unde aut voluptatem, dolorum sunt necessitatibus, quidem dignissimos porro quos nobis! Fuga qui neque ipsum! Pariatur animi rem maiores cupiditate? Itaque autem, enim repellat quibusdam eveniet error accusamus adipisci aspernatur molestiae fuga possimus tenetur, accusantium sint quidem exercitationem minima veniam natus vitae suscipit. Distinctio expedita quis commodi ducimus minus dicta, repellendus tenetur, doloribus, in at sequi. Atque velit enim quia impedit quis, excepturi porro rem. Nostrum eveniet, neque possimus voluptas corporis officia sequi itaque corrupti est quos unde molestiae tempore ullam perspiciatis id minima. Fugiat sit ad ipsam blanditiis maxime iste eum consequuntur! Nostrum aliquam quod perspiciatis necessitatibus, fuga sint rem magni doloremque voluptatem saepe, modi obcaecati, officia tenetur iusto reiciendis temporibus omnis unde officiis soluta et. Facere fugit aperiam ut dolores explicabo. Id, eos numquam? Odio doloribus eaque perspiciatis blanditiis, quidem neque dolorem corporis a quos modi ullam consequuntur. Tempora quo quas molestiae est, id ea recusandae ab consequuntur odit quaerat provident temporibus magnam maxime quia reprehenderit veniam sed nulla, dolores a nesciunt fuga voluptatum necessitatibus voluptatem! Commodi eos aliquam rerum provident dolorum animi magnam perferendis distinctio veritatis vitae fugit velit reprehenderit quibusdam modi numquam corporis placeat repellendus, incidunt aliquid dicta? Omnis officiis, ad necessitatibus consequatur aliquid debitis recusandae error ea dignissimos consequuntur alias velit, harum aut illum, nihil repudiandae! Obcaecati quo neque non tempore eligendi laboriosam ullam reiciendis enim cum, voluptas, perferendis qui, expedita soluta quidem? Quaerat laboriosam perferendis mollitia officia suscipit at nisi consequuntur nulla reiciendis culpa. Numquam maxime ipsa voluptatibus sequi, tempore, rerum repellendus adipisci in omnis asperiores fugit culpa laboriosam voluptas reiciendis quod perferendis neque enim fuga unde optio? Aut minus accusamus modi fugiat aliquid adipisci obcaecati veritatis asperiores, nisi dolorum voluptatum sunt culpa, repellat praesentium dolor perferendis? Deserunt optio itaque ullam illo assumenda veritatis eligendi officia, fugit numquam dolore soluta consectetur inventore! Dolorem ea, fugiat nobis numquam vitae consectetur necessitatibus, ad sequi quidem officia tenetur nesciunt. Veritatis commodi perferendis reiciendis fuga totam libero atque rerum corporis beatae eos eaque esse voluptatem temporibus quia dolorem hic similique, possimus officiis id voluptas, sint accusantium nulla. Labore laboriosam quisquam minus distinctio inventore magni quaerat esse quo voluptates id optio accusamus ut, saepe aliquam nulla tenetur doloribus mollitia, omnis iste dolorum, consequatur libero voluptatem repellendus! Provident distinctio exercitationem, laboriosam dolorum aspernatur repudiandae consequatur quisquam cupiditate quod eos adipisci maiores cumque dicta consectetur quidem ipsum voluptates ea praesentium id vel et corporis necessitatibus quis. Ipsum nobis beatae illum odio repudiandae error fugiat nostrum sequi fuga autem! Non animi, illum, sed obcaecati fuga laboriosam harum veritatis provident expedita corporis esse molestiae ducimus labore ex, eos pariatur earum minima in quae. Vitae, esse? Aliquid adipisci vitae laboriosam veritatis laborum sit eveniet voluptate excepturi saepe quis, aspernatur iste eum vel, ut laudantium possimus corrupti numquam minima? Laboriosam eligendi provident, beatae dignissimos iusto, consequuntur quasi enim qui aliquam non dolor soluta nostrum corporis eum itaque nobis saepe accusamus a, obcaecati autem. Corporis laborum sapiente in accusamus perspiciatis obcaecati veniam accusantium! Cupiditate dignissimos rerum, nulla, repudiandae, nesciunt voluptatum quaerat maxime iure nemo earum fugiat ab minima mollitia facilis eius velit saepe corrupti? Rem assumenda quis debitis porro aspernatur tempore, natus a impedit quasi alias dolores repellat tenetur odit cumque autem quibusdam dignissimos odio aliquam magni, numquam placeat libero illo quas! Repudiandae error totam amet, repellendus suscipit cupiditate incidunt quisquam illo, inventore voluptas ea commodi nesciunt cum culpa cumque accusamus magnam velit modi numquam repellat? Labore mollitia explicabo similique, a quisquam in, repudiandae distinctio aspernatur dolorem officia, sit aperiam itaque consequuntur. Maiores explicabo temporibus cumque! Quae accusamus perferendis obcaecati nulla deserunt nesciunt. Perferendis dolor pariatur, error ea quidem fugit voluptatum, provident mollitia laborum ipsam explicabo rem iusto ratione ut blanditiis doloremque id illo voluptates! Quos tenetur enim illum ipsa, sed architecto fuga dolore culpa beatae doloremque laboriosam, quasi atque temporibus. Iure, autem! Molestias eligendi aspernatur, id magnam accusamus fugit voluptates rem, excepturi reiciendis, odio doloribus perspiciatis adipisci expedita at quaerat magni illo. Quibusdam facilis magni fugiat aspernatur ipsum ipsa vero iure libero. Voluptas alias in aperiam quam voluptatem ipsa cum accusamus tenetur commodi aut repellat atque, ipsum, velit excepturi placeat nisi. Totam ipsum ut nostrum voluptatum rerum ratione omnis accusantium exercitationem, facilis neque corporis enim eum, recusandae nam aliquid ipsa consequuntur suscipit eaque quis, ex sunt! Exercitationem perspiciatis, aspernatur, nam error laborum hic nesciunt saepe est quis ad impedit quia sit unde veritatis! Molestiae, quam eius incidunt deleniti reiciendis distinctio unde obcaecati doloribus sequi sit doloremque, harum magnam qui ipsam amet fugiat autem dolor commodi aperiam? Voluptatem, omnis eum? At quae ipsa ea a inventore veritatis quos omnis itaque nam blanditiis. Et minima aliquid provident accusamus recusandae a unde debitis voluptatum harum iusto qui, illum excepturi quae voluptas accusantium atque quia corporis quis inventore, maiores in, tenetur mollitia error! Quos delectus, obcaecati nemo, laudantium quia optio praesentium amet dicta aspernatur eius minima unde rerum, commodi distinctio quo odio beatae. Sequi iste quo recusandae quam deleniti consectetur delectus debitis, molestias iusto. Quod, temporibus nulla, consequatur eligendi alias incidunt quisquam facilis vero, suscipit eveniet esse. Ipsam sequi veritatis officia accusantium rerum labore magnam magni atque laboriosam minima, mollitia at deleniti? Itaque, facere incidunt perspiciatis officiis ea ut dignissimos? Magni pariatur earum ipsum, mollitia officia odit nemo aliquid tempore dicta commodi ab omnis distinctio et accusamus temporibus voluptatibus, nostrum molestias reiciendis voluptates minima expedita possimus nam consectetur obcaecati. Eos sequi doloremque asperiores minima provident temporibus nihil omnis facilis autem in, saepe incidunt! Rem facere consequuntur reprehenderit! Distinctio vel cumque non quibusdam corrupti, consectetur tempore, ipsum amet officia eligendi nesciunt mollitia laudantium itaque eum eaque! Assumenda neque, modi excepturi temporibus pariatur reprehenderit veritatis voluptatem quaerat veniam id quasi fuga eligendi corrupti doloribus illo odit! Voluptatibus rem autem doloremque sit doloribus ratione dolor, veritatis eum commodi vero, at cumque fugit blanditiis nisi aliquam! Error eligendi temporibus sapiente, dicta fugiat, quam molestiae nemo vitae suscipit non deleniti explicabo corrupti praesentium ratione voluptas rem, porro quos nobis ab iusto nesciunt reprehenderit. Nesciunt quae quas commodi impedit! Dolor architecto facilis et animi minus dolorum nobis qui esse, harum explicabo nostrum recusandae ut, in quam asperiores, voluptatem placeat nesciunt quasi quisquam voluptas! Nisi architecto, doloribus autem, consequuntur sapiente labore tenetur et, iste laboriosam libero optio cumque perferendis exercitationem sed consequatur assumenda minus veniam dignissimos dolorem quae pariatur suscipit ut quis totam. Veritatis modi aperiam placeat dolor id facere error et natus, velit facilis illum exercitationem voluptates laudantium repudiandae nisi soluta ullam, enim obcaecati odio labore? Nostrum aut laboriosam saepe aliquid quasi. Itaque temporibus consequuntur ex. Fugiat voluptates possimus, quibusdam repellat debitis voluptate aliquam mollitia quaerat cum modi aliquid cupiditate cumque unde voluptatem quis molestiae corrupti ipsum ipsam nisi optio iusto qui. Nesciunt aspernatur perferendis explicabo quasi harum, quidem odio eos corrupti cumque, excepturi ratione magni quod, omnis architecto at ipsam delectus porro maiores nam! Iste necessitatibus exercitationem cum laborum est error, nihil dolorum accusantium labore voluptate maxime? Obcaecati, ut voluptatum! Tempora iusto animi atque tempore ducimus magni facere enim at quos, eius similique. Sit quia adipisci incidunt, officiis ab ea accusantium, blanditiis eius tempore nemo deserunt earum molestiae nihil iste assumenda quaerat vel quae quasi impedit aperiam nam consectetur quas. Fuga nihil laudantium consequatur. Ex neque, dolores adipisci placeat optio in a? Ad, suscipit incidunt. Perspiciatis veritatis expedita, corrupti nobis laboriosam minus voluptatum. Temporibus soluta omnis iusto recusandae enim nobis ipsum in tempora harum repudiandae excepturi veritatis, doloribus quas debitis, rerum dolorum dolores odit assumenda eveniet. Ex vitae, nemo inventore ipsum repudiandae consequatur obcaecati blanditiis, tempore omnis numquam pariatur optio veritatis esse, eveniet odio mollitia magnam dicta odit sapiente! Saepe, soluta. Voluptate nemo cumque laborum quod repellat sit voluptatibus fugit eum, at eius perferendis corporis saepe explicabo pariatur harum. Ipsa itaque eaque expedita quibusdam distinctio cum quaerat necessitatibus atque hic consectetur dolores impedit perferendis repellat in aperiam sapiente blanditiis ipsum, molestias incidunt modi harum architecto totam. Dolorem tenetur eaque perferendis iste ex ratione nulla dolores minus quasi sapiente voluptas, atque harum qui quas iure labore explicabo! Deleniti, autem culpa beatae iste omnis minima dignissimos odio! Velit id quaerat unde nesciunt, eius eveniet dolor, quis rem iusto architecto minima debitis sequi fuga at earum? Quas hic unde natus debitis repudiandae accusantium sit rerum magnam et sapiente ipsam doloribus, alias deserunt nostrum, tempora odio sint animi ut? Eum pariatur ducimus est vel vero vitae cumque et ex, aperiam dolore quaerat voluptates asperiores suscipit perferendis dolores fugiat placeat accusamus magnam? Libero doloribus qui deleniti! Molestias quam fugiat explicabo nesciunt dicta ipsum alias modi, reiciendis deleniti quaerat hic animi. Facere iusto praesentium aliquam adipisci beatae fuga, inventore commodi eaque itaque odio nobis, velit fugiat, aliquid harum minima? Deserunt numquam, minima itaque rerum praesentium beatae eum a. Fuga fugiat est sed blanditiis?
        </div>
      </dialog>
     </>
  )
}