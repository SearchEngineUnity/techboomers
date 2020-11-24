import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { AiOutlineGlobal } from 'react-icons/ai';

export default () =>
  S.list()
    .title('SY')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
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
              S.documentTypeListItem('page').title('Structured Pages'),
              S.documentTypeListItem('redirect').title('Redirects'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('guide').title('Guides'),
      S.documentTypeListItem('app').title('Apps'),
      S.documentTypeListItem('os').title('OS'),
    ]);
