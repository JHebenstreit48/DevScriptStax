import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ResourceNamingConventions = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/RESTfulDesignPrinciples/ResourceNamingConventions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resource Naming Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResourceNamingConventions;
