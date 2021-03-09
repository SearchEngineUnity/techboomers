import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { AiOutlineGlobal } from 'react-icons/ai';

export default () =>
  S.list()
    .title('Demo Centre')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(MdSettings)
                .child(S.document().schemaType('generalSettings').documentId('generalSettings')),
              S.listItem()
                .title('Palette')
                .icon(MdSettings)
                .child(S.document().schemaType('palette').documentId('palette')),
              S.listItem()
                .title('Typography')
                .icon(MdSettings)
                .child(S.document().schemaType('typography').documentId('typography')),
            ]),
        ),
      S.listItem()
        .title('Company Info')
        .icon(HiOutlineOfficeBuilding)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('companyInfo').documentId('companyInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([
              S.documentTypeListItem('navMenu').title('Navigation Menus'),
              S.divider(),
              S.documentTypeListItem('page').title('Structured Pages'),
              S.documentTypeListItem('spGuide').title('SP Guides'),
              S.divider(),
              S.documentTypeListItem('redirect').title('Redirects'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('testImage').title('Test Images'),
    ]);
