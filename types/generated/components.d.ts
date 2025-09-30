import type { Schema, Struct } from '@strapi/strapi';

export interface SharedComentario extends Struct.ComponentSchema {
  collectionName: 'components_shared_comentarios';
  info: {
    displayName: 'Comentario';
    icon: 'discuss';
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::empleado.empleado'>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    timestamp: Schema.Attribute.DateTime & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRegistroVacaciones extends Struct.ComponentSchema {
  collectionName: 'components_shared_registro_vacaciones';
  info: {
    displayName: 'Registro de Vacaci\u00F3n';
    icon: 'calendar';
  };
  attributes: {
    total: Schema.Attribute.Integer & Schema.Attribute.Required;
    used: Schema.Attribute.Integer & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTareaDelegada extends Struct.ComponentSchema {
  collectionName: 'components_shared_tarea_delegadas';
  info: {
    displayName: 'Tarea Delegada';
    icon: 'bulletList';
  };
  attributes: {
    assignedTo: Schema.Attribute.Relation<'oneToOne', 'api::empleado.empleado'>;
    comments: Schema.Attribute.Component<'shared.comentario', true>;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    project: Schema.Attribute.Relation<'oneToOne', 'api::proyecto.proyecto'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.comentario': SharedComentario;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.registro-vacaciones': SharedRegistroVacaciones;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tarea-delegada': SharedTareaDelegada;
    }
  }
}
