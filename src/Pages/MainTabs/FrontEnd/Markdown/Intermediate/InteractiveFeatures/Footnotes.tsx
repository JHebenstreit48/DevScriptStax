import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Footnotes = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/InteractiveFeatures/Footnotes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Footnotes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Footnotes;
