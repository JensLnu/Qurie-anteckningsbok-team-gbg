export default class Note {
    constructor(noteId, title){
        this.noteId = noteId,
        this.title = title,
        this.content = "",
        this.fonts = [],
        this.hashtags = [],
        this.favorite = false,
        this.size = 16,
        this.htmlReference;
        this.noteTemplate;
        
    }
    updateTitle(title){
        this.title = title;
        this.save();
    }
    updateContent(content) {
        this.content = content; 
        this.save();
    }
    updateFont(fontName){
        this.fonts.push(fontName);
        this.save();
    }
    addTag(tagName){   
        if (!this.hashtags.includes(tagName) && tagName !== '') this.hashtags.push(tagName);
        this.save();
    }
    removeTag(tagName){
        this.hashtags = this.hashtags.filter(hashtag => hashtag !== tagName);
        this.save();
    }
    updateFavorite() {
        this.favorite = !this.favorite;
        this.save();
    }
    updateSize(size){
        this.size = size;
        this.save();
    }
    updateHtmlReference(ref){
        this.htmlReference = ref;
        this.save();
    }
    updateNoteTemplate(template){
        this.noteTemplate = template;
        this.save();
    }
    save(){
        const note = {
            noteId : this.noteId,
            title: this.title,
            content : this.content,
            fonts : this.fonts,
            hashtags : this.hashtags,
            favorite : this.favorite,
            size : this.size,
            htmlReference: this.htmlReference,
            noteTemplate: this.noteTemplate
        }
        localStorage.setItem(this.noteId, JSON.stringify(note));
    }
}
// const texting = document.getElementById('testing');
// const note = new Note(1, 'hejhej');
// note.uppdateContent(texting.innerHTML)
// note.updateTitle('tjenixen')
// note.updateFavorite();
// note.saveNote();