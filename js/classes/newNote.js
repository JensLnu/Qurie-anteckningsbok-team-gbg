//Class with functions to manipulate title, content, fonts, tags, favorite, font-sizes and template plus a save function to store everything in LS
export default class Note {
    constructor(noteId, title){
        this.noteId = noteId,
        this.title = title,
        this.content = "",
        this.fonts = [],
        this.hashtags = [],
        this.favorite = false,
        this.size = 16,
        this.template;        
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
    updateTemplate(template){
        this.template = template;
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
            template: this.template
        }
        localStorage.setItem(this.noteId, JSON.stringify(note));
    }
}
