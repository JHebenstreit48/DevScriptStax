import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
