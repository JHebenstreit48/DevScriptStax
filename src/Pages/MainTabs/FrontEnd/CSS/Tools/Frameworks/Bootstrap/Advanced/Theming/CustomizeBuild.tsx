import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomizeBuild = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Theming/CustomizeBuild';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Customize Build" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomizeBuild;
