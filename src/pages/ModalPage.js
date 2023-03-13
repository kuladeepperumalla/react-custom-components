import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const[showModal, setShowModal] = useState(false);
    

    const handleClick = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept!</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>
    return (
      <div>
        <Button onClick={handleClick} primary>
          Show Modal
        </Button>
        {showModal && modal}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem
          neque, eleifend vitae aliquam a, maximus ac risus. Donec ultricies
          maximus risus non dapibus. Cras feugiat mi eget condimentum rhoncus.
          Nullam in semper erat. Nulla augue purus, eleifend elementum ligula
          et, pharetra pharetra justo. Nulla vehicula vitae sapien nec faucibus.
          Proin faucibus placerat sapien, vehicula luctus tellus auctor
          elementum. Nulla viverra a nulla sit amet dapibus. Aliquam lorem erat,
          placerat eget lorem ut, imperdiet condimentum ante. Suspendisse
          tincidunt finibus pretium. Nunc eleifend sapien id lacus blandit
          porttitor non ut metus. Suspendisse tristique blandit pulvinar. In vel
          dui pretium risus molestie faucibus. Vestibulum molestie libero
          dignissim eros pulvinar, non convallis velit mollis. Cras sit amet
          magna sit amet elit molestie mollis. Fusce quis dapibus elit.
          Phasellus urna risus, congue at mauris quis, posuere volutpat ex.
          Donec scelerisque orci purus, ut eleifend mi fermentum vitae.
          Suspendisse et mi lacinia lectus lacinia aliquet. Phasellus quis
          blandit elit. Integer at sagittis felis, et sodales sapien. Sed
          vestibulum tortor sit amet sapien molestie, ac viverra massa
          porttitor. In id ipsum mauris. Etiam rutrum ligula vitae magna
          fringilla, vitae auctor lectus tempus. Donec ut pharetra ex, vitae
          mattis velit. Aenean faucibus dictum tellus nec sodales. Vivamus
          pellentesque felis id leo bibendum, sit amet vehicula elit sagittis.
          Nullam mattis, ligula eu lobortis vestibulum, ex odio luctus dolor, ut
          facilisis lectus eros in purus. Integer nec nunc nec odio interdum
          accumsan et vel turpis. Pellentesque consequat sollicitudin dapibus.
          Ut aliquam enim in risus dapibus malesuada. Fusce sagittis consequat
          eros ut porttitor. Donec imperdiet felis interdum tempus efficitur.
          Morbi ut tincidunt diam, at imperdiet justo. Curabitur sapien enim,
          commodo id odio ac, sollicitudin tincidunt mi. Mauris egestas massa
          sed quam fringilla posuere. Aliquam aliquet, enim eu pulvinar laoreet,
          erat nulla feugiat tortor, cursus ultrices libero quam a odio. Duis
          mollis maximus odio nec iaculis. Ut nec turpis odio. Aliquam pretium,
          nisl vel pulvinar luctus, enim ligula elementum tellus, vel dictum
          lectus ligula non urna. Donec in libero at mi posuere cursus. Cras eu
          leo dui. In sed tempor magna, sit amet molestie est. Vivamus commodo,
          tellus non blandit dictum, erat turpis rutrum nibh, at pulvinar elit
          mi vel turpis. Quisque ut diam quis dolor varius interdum. Aliquam a
          nulla et lacus ultrices malesuada sed eu velit. Proin imperdiet sem et
          mi malesuada egestas. Suspendisse porttitor sapien vitae sodales
          dapibus. Maecenas non viverra sapien. Vivamus quis tristique justo,
          nec vulputate dui. Aliquam ac congue tellus. Donec varius tellus at
          justo tincidunt porta. Sed rhoncus volutpat diam vitae mollis.
          Curabitur imperdiet congue urna, et posuere eros ultrices ac. Vivamus
          eget tristique ipsum, tempus faucibus mi. Curabitur consequat risus
          elit, in dictum dui volutpat et. Phasellus rutrum vel odio id
          pharetra. Nam feugiat lobortis est a ultricies. Pellentesque turpis
          ex, pretium at fermentum sed, porta ac tellus. Curabitur dictum
          egestas sapien, ac posuere est gravida in. Pellentesque imperdiet
          lectus a mauris elementum auctor. Etiam aliquet, nisi eget mattis
          cursus, ipsum tellus rutrum lorem, vitae suscipit sem ex id tellus.
          Suspendisse finibus nibh magna, sit amet blandit enim molestie sed.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem
          neque, eleifend vitae aliquam a, maximus ac risus. Donec ultricies
          maximus risus non dapibus. Cras feugiat mi eget condimentum rhoncus.
          Nullam in semper erat. Nulla augue purus, eleifend elementum ligula
          et, pharetra pharetra justo. Nulla vehicula vitae sapien nec faucibus.
          Proin faucibus placerat sapien, vehicula luctus tellus auctor
          elementum. Nulla viverra a nulla sit amet dapibus. Aliquam lorem erat,
          placerat eget lorem ut, imperdiet condimentum ante. Suspendisse
          tincidunt finibus pretium. Nunc eleifend sapien id lacus blandit
          porttitor non ut metus. Suspendisse tristique blandit pulvinar. In vel
          dui pretium risus molestie faucibus. Vestibulum molestie libero
          dignissim eros pulvinar, non convallis velit mollis. Cras sit amet
          magna sit amet elit molestie mollis. Fusce quis dapibus elit.
          Phasellus urna risus, congue at mauris quis, posuere volutpat ex.
          Donec scelerisque orci purus, ut eleifend mi fermentum vitae.
          Suspendisse et mi lacinia lectus lacinia aliquet. Phasellus quis
          blandit elit. Integer at sagittis felis, et sodales sapien. Sed
          vestibulum tortor sit amet sapien molestie, ac viverra massa
          porttitor. In id ipsum mauris. Etiam rutrum ligula vitae magna
          fringilla, vitae auctor lectus tempus. Donec ut pharetra ex, vitae
          mattis velit. Aenean faucibus dictum tellus nec sodales. Vivamus
          pellentesque felis id leo bibendum, sit amet vehicula elit sagittis.
          Nullam mattis, ligula eu lobortis vestibulum, ex odio luctus dolor, ut
          facilisis lectus eros in purus. Integer nec nunc nec odio interdum
          accumsan et vel turpis. Pellentesque consequat sollicitudin dapibus.
          Ut aliquam enim in risus dapibus malesuada. Fusce sagittis consequat
          eros ut porttitor. Donec imperdiet felis interdum tempus efficitur.
          Morbi ut tincidunt diam, at imperdiet justo. Curabitur sapien enim,
          commodo id odio ac, sollicitudin tincidunt mi. Mauris egestas massa
          sed quam fringilla posuere. Aliquam aliquet, enim eu pulvinar laoreet,
          erat nulla feugiat tortor, cursus ultrices libero quam a odio. Duis
          mollis maximus odio nec iaculis. Ut nec turpis odio. Aliquam pretium,
          nisl vel pulvinar luctus, enim ligula elementum tellus, vel dictum
          lectus ligula non urna. Donec in libero at mi posuere cursus. Cras eu
          leo dui. In sed tempor magna, sit amet molestie est. Vivamus commodo,
          tellus non blandit dictum, erat turpis rutrum nibh, at pulvinar elit
          mi vel turpis. Quisque ut diam quis dolor varius interdum. Aliquam a
          nulla et lacus ultrices malesuada sed eu velit. Proin imperdiet sem et
          mi malesuada egestas. Suspendisse porttitor sapien vitae sodales
          dapibus. Maecenas non viverra sapien. Vivamus quis tristique justo,
          nec vulputate dui. Aliquam ac congue tellus. Donec varius tellus at
          justo tincidunt porta. Sed rhoncus volutpat diam vitae mollis.
          Curabitur imperdiet congue urna, et posuere eros ultrices ac. Vivamus
          eget tristique ipsum, tempus faucibus mi. Curabitur consequat risus
          elit, in dictum dui volutpat et. Phasellus rutrum vel odio id
          pharetra. Nam feugiat lobortis est a ultricies. Pellentesque turpis
          ex, pretium at fermentum sed, porta ac tellus. Curabitur dictum
          egestas sapien, ac posuere est gravida in. Pellentesque imperdiet
          lectus a mauris elementum auctor. Etiam aliquet, nisi eget mattis
          cursus, ipsum tellus rutrum lorem, vitae suscipit sem ex id tellus.
          Suspendisse finibus nibh magna, sit amet blandit enim molestie sed.
        </p>
      </div>
    );
}

export default ModalPage