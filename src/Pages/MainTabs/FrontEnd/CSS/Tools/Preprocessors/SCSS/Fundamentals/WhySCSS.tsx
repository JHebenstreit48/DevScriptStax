import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhySCSS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/WhySCSS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Why SCSS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhySCSS;
