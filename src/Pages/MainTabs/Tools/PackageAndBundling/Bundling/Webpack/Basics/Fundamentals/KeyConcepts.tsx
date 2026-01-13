import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KeyConcepts = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/Fundamentals/KeyConcepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Key Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeyConcepts;
