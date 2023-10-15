# Campo minato

- creare la struttura html

- cliccare su "gioca" per cominciare a giocare:
    - aggiungere al bottone un'azione:
        - recuperare dal DOM l'elemento start-btn
         - aggiungere .addEventListener a startBtnElement
         - inviare al DOM gridDOMElement privo di contenuto

        - creare in js gli elementi della griglia e inviarli inviarli al DOM:
            - recuperare dal DOM l'elemento grid
             - con un ciclo for, generare le 100 caselle e inviarle al DOM:
                - generare 100 numeri (da 1 a 100)
                - dichiarare la variabile gridCell con il codice html della cella
                - inserire in gridCell i numeri generati dal ciclo for
                - inviare gli elementi della griglia al DOM (codice )

- quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro e viene emesso un messaggio in console con il numero della cella cliccata





L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.