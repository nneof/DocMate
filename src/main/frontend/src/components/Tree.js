import React, {useEffect} from 'react'
import '../styling/Tree.css'

function Tree(props) {

    const treeData = [
        {
            "_id": "ουρολοίμωξη",
            "description": "ουρολοίμωξη",
            "children": [
                {
                    "description": "Σημεία και συμπτώματα πυελονεφρίτιδας. (Πυρετός > 38°C, ρίγος, οσφυϊκός πόνος, συχνουρία, δυσουρία, άλλα κυστικά ενοχλήματα)",
                    "children": [
                        {
                            "description": "Υπάρχει ναυτία, έμετος, αδυναμία λήψης φαρμάκων ή τροφής από το στόμα ή σηπτική κατάσταση;",
                            "children": [
                                {
                                    "description": "ΟΧΙ",
                                    "children": [
                                        {
                                            "description": "Ανάλυση ούρων και καλλιέργεια ούρων. Υπερηχογράφημα (σε υποψία ουρολογικής ανωμαλίας). Εξωνοσοκομειακή από του στόματος θεραπεία",
                                            "children": [
                                                {
                                                    "description": "Σιπρογλοξασίνη ή λεβοφλοξασίνη ή αμινοπενικιλλίνη/αναστολέα β-λακταμάσης ή κεφαλοσπορίνη ευρέος φάσματος ή κατριμοξαζόλη (μόνο επί γνωστής ευαισθησίας - όχι σαν εμπειρική θερα) +- μίας αρχικής δόσησ παρεντερικά αμινογλυκοσίδης",
                                                    "children": [
                                                        {
                                                            "description": "Κλινική βελτίωση εντός 72 ώρων. Συνέχιση της per os θεραπείας. Συνολική διάρκεια θεραπείας 7-14 ημέρες",
                                                            "children": [
                                                                {
                                                                    "description": "Καλλιέργεια ούρων την 4η ημέρα (προαιρετική). Καλλιέργεια ούρων σε 5-10 ημέρες μετά τη θεραπεία"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "Μη κλινική βελτίωση ή επιδείνωση. Εισαγωγή στο νοσοκομείο. Αλλαγή σε ενδοφλέβια θεραπεία",
                                                            "children": [
                                                                {
                                                                    "description": "Επιπρόσθετες καλλιέργειες αίματος και ούρων Διερεύνηση ουροποιητικού για απόφραξη ή απόστημα (ECHO ή CT)"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "description": "ΝΑΙ",
                                    "children": [
                                        {
                                            "description": "Ανάλυση ούρων και καλλιέργεια ούρων. Υπερηχογράφημα(σε όλους τους ασθενείς) Εισαγωγή στο νοσοκομείο Αρχική ενδοφλέβια θεραπεία για 1-3 ημέρες",
                                            "children": [
                                                {
                                                    "description": "Σιπροφλοξασίνη ή λεβοφλοξασίνη ή αμινοπενικιλλίνη ή πιπερακιλλίνη/ αναστολέα β-λακταμάσης ή κεφαλοσπορίνη γ’ γενεάς ± Αμινογλυκοσίδη ή Αμινογλυκοσίδη ±ευρέος φάσματος πενικιλλίνη",
                                                    "children": [
                                                        {
                                                            "description": "Κλινική βελτίωση εντός 72 ωρών Αλλαγή σε per os θεραπεία και συνέχιση της στο σπίτι Συνολική διάρκεια θεραπείας 7-14 ημέρες",
                                                            "children": [
                                                                {
                                                                    "description": "Καλλιέργεια ούρων την 4η ημέρα (προαιρετική). Καλλιέργεια ούρων σε 5-10 ημέρες μετά τη θεραπεία"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "description": "Μη κλινική βελτίωση ή επιδείνωση Συνέχιση της ενδοφλέβιας θεραπείας στο νοσοκομείο",
                                                            "children": [
                                                                {
                                                                    "description": "Επιπρόσθετες καλλιέργειες αίματος και ούρων Διερεύνηση ουροποιητικού για απόφραξη ή απόστημα (ECHO ή CT)"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

    const treeRendering = (treeData) => {
        return (
            <ul>
                {
                    treeData.map((item) =>
                        <li>
                            <div>{item.description}</div>
                            {
                                item.children && item.children.length ?
                                    treeRendering(item.children)
                                    : ''
                            }
                        </li>
                    )
                }
            </ul>
        )
    }

    return (
        <div className={"tree contentParent"}>
            {treeRendering(props.treeData)}
        </div>
    )
}

export default Tree