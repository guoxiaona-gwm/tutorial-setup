// Import the editor
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

// Get the HTML element with the ID of 'app'.
const element = document.querySelector( '#app' );

// Instantiate the editor using the `create` method.
const editor = await ClassicEditor.create( element, {
  plugins: [
      Essentials,
      Paragraph
  ],
  // Add the toolbar configuration.
  toolbar: {
    items: [
      'undo',
      'redo'
    ]
  }
});

window.editor = editor;
