import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UsingTagsAndFilters = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/UsingTagsAndFilters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Using Tags and Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingTagsAndFilters;
