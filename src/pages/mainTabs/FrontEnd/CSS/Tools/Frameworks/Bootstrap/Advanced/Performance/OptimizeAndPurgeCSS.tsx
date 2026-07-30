import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OptimizeAndPurgeCSS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance/OptimizeAndPurgeCSS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimize & PurgeCSS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimizeAndPurgeCSS;
