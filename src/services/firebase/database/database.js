import { db } from '../firebase'
import { ref, child } from 'firebase/database'

const rootPath = 'resende_public/'
const rootRef = ref(db, rootPath)

const projectsRef = child(rootRef, 'projects')

export { projectsRef }