<template>
  <div>
    <div class="flex justify-center bg-gray-300 py-10 lg:py-20">
      <div class="flex flex-wrap max-w-5xl">
        <div class="w-full lg:w-1/2 px-3">
          <div class="flex flex-wrap">
            <div class="w-full">
              <h3 class="text-3xl font-bold mb-4">1. Fyll ut mottaker</h3>
            </div>
            <div class="w-full">
              <label class="block mb-2">
                <span class="block">Navn</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="recipient.name"
                  v-model="recipient.name"
                  :placeholder="defaults.recipient.name">
              </label>
            </div>
            <div class="w-full">
              <label class="block mb-2">
                <span class="block">Adresse</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="recipient.address"
                  v-model="recipient.address"
                  :placeholder="defaults.recipient.address">
              </label>
            </div>
            <div class="w-full lg:w-1/2">
              <label class="block mb-2 lg:pr-2">
                <span class="block">Postnummer</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="recipient.city"
                  v-model="recipient.zip"
                  :placeholder="defaults.recipient.zip">
              </label>
            </div>
            <div class="w-full lg:w-1/2">
              <label class="block mb-2">
                <span class="block">By/Poststed</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="recipient.city"
                  v-model="recipient.city"
                  :placeholder="defaults.recipient.city">
              </label>
            </div>
            <div class="w-full">
              <label class="block mb-2">
                <span class="block">Land</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="recipient.country"
                  v-model="recipient.country"
                  :placeholder="defaults.recipient.country">
              </label>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-3">
          <div class="flex flex-wrap">
            <div class="w-full">
              <h3 class="text-3xl font-bold mb-4">2. Fyll ut avsender (deg)</h3>
            </div>
            <div class="w-full lg:w-1/2">
              <label class="block mb-2 lg:pr-2">
                <span class="block">Navn</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="sender.name"
                  v-model="sender.name"
                  :placeholder="defaults.sender.name">
              </label>
            </div>
            <div class="w-full lg:w-1/2">
              <label class="block mb-2">
                <span class="block">E-postadresse</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="sender.email"
                  v-model="sender.email"
                  :placeholder="defaults.sender.email">
              </label>
            </div>
            <div class="w-full">
              <label class="block mb-2">
                <span class="block">Adresse</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="sender.address"
                  v-model="sender.address"
                  :placeholder="defaults.sender.address">
              </label>
            </div>
            <div class="w-full lg:w-1/2">
              <label class="block mb-2 lg:pr-2">
                <span class="block">Postnummer</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="sender.zip"
                  v-model="sender.zip"
                  :placeholder="defaults.sender.zip">
              </label>
            </div>
            <div class="w-full lg:w-1/2">
              <label class="block mb-2">
                <span class="block">By/Poststed</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="sender.city"
                  v-model="sender.city"
                  :placeholder="defaults.sender.city">
              </label>
            </div>
            <div class="w-full">
              <label class="block mb-2">
                <span class="block">Land</span>
                <input class="form-input border-gray-400 w-full"
                  type="text"
                  name="sender.country"
                  v-model="sender.country"
                  :placeholder="defaults.sender.country">
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center bg-gray-200 py-10 px-3 lg:py-20">
      <div class="w-full text-center">
        <h3 class="text-3xl font-bold">3. Kopier og send generert innsynsbegjæring</h3>

        <button data-clipboard-target="#gdpr-request"
          @click="copySuccessful"
          class="copy bg-blue-500 hover:bg-gray-700 text-white font-bold
          py-3 px-6 text-xl rounded mt-10 mb-12">
          Kopier innsynsbegjæring
        </button>
      </div>
      <div class="w-full bg-white max-w-3xl shadow-lg">
        <div id="gdpr-request" class="p-6">
          <strong>{{ recipient.name || defaults.recipient.name }}</strong><br>
          {{ recipient.address || defaults.recipient.address }}<br>
          {{ recipient.zip || defaults.recipient.zip }}
          {{ recipient.city || defaults.recipient.city }}<br>
          {{ recipient.country || defaults.recipient.country }}<br>

          <br>

          <strong>{{ sender.name || defaults.sender.name }}</strong><br>
          {{ sender.email || defaults.sender.email }}<br>
          {{ sender.address || defaults.sender.address }}<br>
          {{ sender.zip || defaults.sender.zip }}
          {{ sender.city || defaults.sender.city }}<br>
          {{ sender.country || defaults.sender.country }}<br>

          <br>

          {{ sender.city || defaults.sender.city }}, {{ today }}.

          <br>
          <br>

          <strong>Innsynsbegjæring</strong>

          <br>
          <br>

          Til den det måtte gjelde.

          <br>

          Jeg ber med dette om bekreftelse på at dere har personopplysninger om meg i deres
          datasystemer eller registre. Om det er tilfellet, ber jeg om innsyn i opplysningene
          etter <a class="text-blue-600 underline"
            href="https://lovdata.no/lov/2018-06-15-38/gdpr/a15">personvernforordningen artikkel 15</a>

          <br>
          <br>

          Nederst i denne e-posten ligger mine rettigheter og deres plikter i
          forbindelse med innsyn.

          <br>
          <br>

          Personopplysningsloven med personvernforordningen forvaltes av Datatilsynet.
          Mer informasjon, veiledning og regelverk finnes på
          <a class="text-blue-600 underline" href="https://www.datatilsynet.no">www.datatilsynet.no</a>.

          <br>
          <br>

          Jeg ønsker innsyn i personopplysninger som er registrert hos dere om meg.

          <br>
          <br>

          Jeg ønsker innsyn i <strong>alle</strong> opplysninger som er lagret i alle systemer,
          registre og dokumenter.

          <br>
          <br>

          Jeg ønsker informasjon om følgende:
          <ol class="list-decimal list-inside pl-4">
            <li>
              Hva er formålet med innsamlingen og behandlingen av personopplysningene?
            </li>
            <li>
              Vil virksomheten utlevere opplysningene til andre, og hvem er i så fall mottakerne?
              Dersom virksomheten er utenfor EØS eller en internasjonal organisasjon, hvilke
              garantier finnes for personvernet?
            </li>
            <li>
              Hvor lenge lagrer virksomheten opplysningene? Dersom det ikke er mulig å komme med
              en endelig lagringstid - hva avgjør hvor lenge opplysningene lagres?
            </li>
            <li>
              Hvilke rettigheter har den som er registrert knyttet til retting, sletting,
              begrensning, klagebehandling eller til å protestere mot behandlingen?
            </li>
            <li>
              Dersom ikke opplysningene er samlet inn fra den registrerte selv –
              hvor de er samlet inn fra?
            </li>
            <li>
              Tar virksomheten automatiserte individuelle avgjørelser?
              Og i så fall, hvilken logikk ligger bak, og hvilke følger kan det ha?
            </li>
          </ol>

          <br>
          <br>

          Jeg vil avslutte med å legge ved mine rettigheter og deres plikter i forbindelse
          med innsyn. Mer informasjon finner dere på <a class="text-blue-600 underline"
            href="https://www.datatilsynet.no">www.datatilsynet.no</a> og
          <a class="text-blue-600 underline" href="https://www.lovdata.no">www.lovdata.no</a>.

          <br>
          <br>

          <strong>Dette er noen av de viktigste rettighetene og pliktene</strong>

          <br>
          <br>

          <strong>Innsyn er en rettighet.</strong> Retten til innsyn og plikten til å gi
          informasjon er lik for både privat og offentlig sektor og står i
          personvernforordningens artikkel 12-15.

          <br>
          <br>

          <strong>Innsyn i egne personopplysninger.</strong> Alle har en generell rett til å
          få en bekreftelse på om en virksomhet samler inn og bruker personopplysninger om dem.
          Hvis en virksomhet har lagret personopplysninger om en person, har vedkommende rett til
          å få vite hvilke opplysninger dette er, inkludert elektroniske spor, metadata og
          eventuelle personprofiler man er tildelt (personvernforordningen artikkel 15 nr. 1).

          <br>
          <br>

          <strong>Rett til utfyllende informasjon.</strong> Dersom en virksomhet har registrert
          opplysninger om en person, har vedkommende også rett til informasjon om formål, eventuell
          utlevering til andre, lagringstid, rettigheter knyttet til behandlingen, hvilke kilder
          opplysningene er hentet fra med mer
          (personvernforordningen artikkel 15 nr. 1 bokstav a-h).

          <br>
          <br>

          <strong>Frist for å gi svar.</strong> Virksomheten har plikt til å svare uten ugrunnet
          opphold, og senest én måned etter å ha fått henvendelsen. Denne fristen kan forlenges
          ytterligere to måneder ved behov, men virksomheten må da sende en begrunnelse for
          forsinkelsen innen fristen (personvernforordningen artikkel 12 nr. 3).

          <br>
          <br>

          <strong>Gratis.</strong> Å bruke rettighetene sine skal være gratis. Det vil si at
          virksomheten ikke kan ta betalt av de som ønsker innsyn med mindre forespørselen er
          åpenbart grunnløs eller overdrevet. Virksomheten skal på oppfordring gi den registrerte
          en kopi av opplysningene som behandles. Dersom den registrerte ønsker flere kopier,
          kan virksomheten kreve et rimelig gebyr basert på administrasjonskostnadene
          (personvernforordningen artikkel 12 nr. 5, og 15 nr. 3).

          <br>
          <br>

          <strong>Unntak.</strong> Det finnes noen unntak fra innsynsretten, for eksempel dersom
          hemmelighold er nødvendig i forbindelse med etterforskning eller rettslig forfølgelse av
          straffbare handlinger, dersom det er utilrådelig at du får kjennskap til opplysningene av
          hensyn til helsen din eller forholdet ditt til nære pårørende, dersom opplysningene er
          omfattet av lovfestet taushetsplikt eller dersom innsynet vil krenke rettighetene og
          frihetene til andre. Hvis en virksomhet ikke gir innsyn, må det gis en skriftlig
          begrunnelse med henvisning til aktuell hjemmel (personopplysningsloven § 16).

          <br>
          <br>

          <strong>Informasjonssikkerhet.</strong> Virksomheten har plikt til å sikre
          personopplysningene. Det gjelder også ved innsynsbegjæringer. Noen personopplysninger er
          så beskyttelsesverdige at de ikke bør sendes på vanlig ukryptert e-post. Virksomhetene må
          derfor gjøre en risikovurdering av hvordan innsyn skal gis og sikre at personopplysningene
          deles med riktig person (personvernforordningen artikkel 32).

          <br>
          <br>

          <strong>Andre typer innsyn.</strong> Eksempler på andre typer innsyn er forvaltningslovens
          regler for partsinnsyn og offentlighetslovens bestemmelser om tilgang til dokumenter og
          informasjon i offentlige etater. Dette er en annen type innsyn, og dette skjemaet er ikke
          ment brukt i slike sammenhenger.

          <br>
          <br>

          Mvh.<br>
          {{ sender.name || defaults.sender.name }}<br>
          {{ sender.email || defaults.sender.email }}
        </div>
      </div>
    </div>
    <div class="flex justify-center bg-gray-200 px-3 pb-10 lg:pb-24">
      <div class="w-full text-center">
        <button data-clipboard-target="#gdpr-request"
          @click="copySuccessful"
          class="copy bg-blue-500 hover:bg-gray-700 text-white font-bold py-3 px-6 text-xl rounded">
          Kopier innsynsbegjæring
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import Clipboard from 'clipboard';

export default {
  data() {
    return {
      recipient: {
        name: '',
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      sender: {
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
      },
      defaults: {
        recipient: {
          name: 'Telenor ASA',
          address: 'Snarøyveien 30',
          zip: '1331',
          city: 'Fornebu',
          country: 'Norge',
        },
        sender: {
          name: 'Ola Nordmann',
          email: 'ola@nordmann.no',
          address: 'Portveien 2',
          zip: '0001',
          city: 'Oslo',
          country: 'Norge',
        },
      },
      today: '01/01-1970',
    };
  },

  created() {
    if (process.client) {
      // eslint-disable-next-line
      new Clipboard('.copy');

      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      this.today = `${dd}/${mm}-${yyyy}`;
    }
  },

  methods: {
    copySuccessful() {
      Swal.fire({
        icon: 'success',
        title: 'Kopiert',
        text: 'Nå kan du sende din innsynsbegjæring!',
        confirmButtonText: 'OK, skjønner!',
      });
    },
  },
};
</script>
