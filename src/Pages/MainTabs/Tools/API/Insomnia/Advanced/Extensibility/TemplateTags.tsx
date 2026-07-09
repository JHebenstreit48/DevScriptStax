import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplateTags = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Extensibility/TemplateTags';

  return (
    <>
      <PageLayout>
        <PageTitle title="Template Tags" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplateTags;
