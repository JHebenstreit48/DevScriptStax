import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Footnotes = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/InteractiveFeatures/Footnotes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Footnotes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Footnotes;
