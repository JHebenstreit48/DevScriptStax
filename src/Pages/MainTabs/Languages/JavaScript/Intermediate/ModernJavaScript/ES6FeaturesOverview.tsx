import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ES6FeaturesOverview = () => {
  const markdownFilePath = 'Languages/JavaScript/Intermediate/ModernJavaScript/ES6FeaturesOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ES6 Features Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ES6FeaturesOverview;
