import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptimizeAndPurgeCSS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance/OptimizeAndPurgeCSS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Optimize & PurgeCSS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimizeAndPurgeCSS;
