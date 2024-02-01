export default class Note {
    constructor(noteId, title){
        this.noteId = noteId,
        this.title = title,
        this.content = "",
        this.fonts = [],
        this.hashtags = [],
        this.favorite = false,
        this.size = 16
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
        this.save()
    }
    updateTags(tag){
        this.hashtags.push(tag);
        this.save()
    }
    updateFavorite() {
        this.favorite = !this.favorite;
        this.save()
    }
    updateSize(size){
        this.size = size;
        this.save()
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
        }
        localStorage.setItem(this.noteId, JSON.stringify(note))
    }
}
// const texting = document.getElementById('testing');
// const note = new Note(1, 'hejhej');
// note.uppdateContent(texting.innerHTML)
// note.updateTitle('tjenixen')
// note.updateFavorite();
// note.saveNote();


