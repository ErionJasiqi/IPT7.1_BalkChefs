# IPT7.1 Planung

## <u>Anforderungen:</u>

### <u>CRUD- Funktionen:</u>

 Es braucht eine Datenbank, um die Rezepte und dessen Elemente zu speichern und manipulieren.

### <u>Login: </u>

Benutzer sollen sich anmelden können oder ein Account erstellen können, welches dann in der Datenbank gespeichert und auch verschlüsselt wird.

### <u>Sprachauswahl: </u>

Die Sprachen sollten anhand von einem Framework implementiert werden und Benutzer können dann eine Sprache wählen welches die UI und die Texte verändert. Ausserdem sollte es auch möglich sein später weitere Sprachen hinzuzufügen.

### <u>Zutaten zu Rezept: </u>

Benutzer sollten die Fähigkeit haben, aus einer Liste von angegebenen Zutaten, einige auszuwählen. Dies dient als eine Filter Funktion. Für diese Funktion braucht es eine Datenbank, welche anhand von Schnittstellen Zutaten mit Rezept verbindet.

### <u>Bewertungssystem: </u>

Benutzer können Rezepte eine Bewertung von 1-5 Sternen geben können, dies kann man dann als eine Filter Option nutzen. Man müsste für das, die Datenbank erweitern, welches dann den Durchschnitt berechnet. Benutzer können nur 1 Bewertung pro Rezept geben.

### <u>Responsive Design & Benutzerfreundlichkeit</u>:

Die Web-App sollte auf allen Geräten nutzbar sein und eine einfache Navigierung besitzen. Dies können wir machen indem wir HTML- oder CSS-Frameworks wie z.B. Tailwind.

### <u>Backend Verbindung: </u>

Wir brauchen eine Backend-Datenbank damit alle Funktionen ausführbar sind und alle Daten gespeichert werden. Dies machen wir anhand einer SQL oder NoSQL Datenbank (evtl.  Airtable) und wir könnten Postman für die Tests nutzen.

## <u>Use-Cases:</u>

| Element       | Beschreibung                                                                                      |
| ------------- |:------------------------------------------------------------------------------------------------- |
| Ziel          | Rezept finden                                                                                     |
| Akteure       | Benutzer                                                                                          |
| Vorbedingung  | Webseite offen haben                                                                              |
| Nachbedingung | Das gesuchte Rezept wurde gefunden                                                                |
| Ablauf        | Rezept suchen und das passende Ergebnis anzeigen                                                  |
| Fehlszenarien | Text wird bei keinem passenden Ergebnis angezeigt, welches sagt das kein Ergebnis gefunden wurde. |

| Element       | Beschreibung                                              |
| ------------- | --------------------------------------------------------- |
| Ziel          | Filtern anhand Zutaten                                    |
| Akteure       | Benutzer                                                  |
| Vorbedingung  | Webseite offen haben                                      |
| Nachbedingung | Ansicht aller Rezepte, welche die gewählten Zutaten haben |
| Ablauf        | Zutaten auswählen und den passenden Rezepten anzeigen     |
| Fehlszenarien | Fehlermeldung bei keinem passenden Rezept oder Auswahl    |

| Element       | Beschreibung                                                 |
| ------------- | ------------------------------------------------------------ |
| Ziel          | Rezept erstellen                                             |
| Akteure       | Benutzer                                                     |
| Vorbedingung  | Webseite offen haben und angemeldet sein                     |
| Nachbedingung | Ein Rezept wurde hergestellt                                 |
| Ablauf        | Details werden eingegeben und das Rezept gespeichert         |
| Fehlszenarien | Fehlermeldung bei fehlenden Angaben oder Verbindungsprobleme |

## <u>User-Stories:</u>

- Als Nutzer möchte ich Rezepte anhand von vorhandenen Zutaten und Bewertung sortieren, sodass ich schnell passende Rezepte finde.

- Als Nutzer möchte ich neue Rezepte erstellen, damit ich sie später nutzen kann.

- Als Nutzer möchte ich erstellte Rezepte bearbeiten oder löschen können, um Änderungen vorzunehmen oder wenn ich dieses Rezept nicht mehr brauche, es zu löschen.

- Als Nutzer möchte ich mich Einloggen können, um meine Änderungen oder Rezepte zu speichern.

- Als Nutzer möchte ich die Sprache ändern können, um die Rezepte in einer bevorzugten Sprache anzusehen.

## <u>Aufgabenverteilung:</u>

| Paket                                     | Person |
| ----------------------------------------- | ------ |
| Sprachframework programmieren             | Erion  |
| Funktionalitäten programmieren und Testen | Erion  |
| Dokumentationen schreiben                 | Erion  |
| Mockups und Skizzen erstellen             | Yusuf  |
| Datenbank Erstellung                      | Yusuf  |
| Webseiten Design (CSS)                    | Yusuf  |
| Backend                                   | Marsel |
| Login Funktion Programmieren und Testen   | Marsel |
| Git Repository Ordnung                    | Marsel |

## <u>Zeitplan:</u>

| Datum      | Paket                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.03.2025 | Mockup, Planung, Vorbereitungen (evtl. Tutorials)                                                                                                                                      |
| 31.03.2025 | Funktionalitäten programmieren                                                                                                                                                         |
| 07.04.2025 | Funktionalitäten programmieren                                                                                                                                                         |
| 14.04.2025 | Ersten CSS-Code für Design schreiben                                                                                                                                                   |
| 21.04.2025 | Backend & Datenbank Erstellung                                                                                                                                                         |
| 28.04.2025 | Login Funktion, Funktionalitäten, Design                                                                                                                                               |
| 05.05.2025 | CSS-Code weiterschreiben                                                                                                                                                               |
| 12.05.2025 | Funktionalitäten                                                                                                                                                                       |
| 19.05.2025 | Login Funktion, Backend                                                                                                                                                                |
| 26.05.2025 | Login Funktion, Backend                                                                                                                                                                |
| Juni       | Funktionalitäten <br/><br/>Backend und CSS-Code fertigschreiben,<br/><br/>Funktionalitäten überprüfen & evtl. verbessern<br/><br/>Präsentation erstellen<br/><br/>Abgabe des Projektes |
