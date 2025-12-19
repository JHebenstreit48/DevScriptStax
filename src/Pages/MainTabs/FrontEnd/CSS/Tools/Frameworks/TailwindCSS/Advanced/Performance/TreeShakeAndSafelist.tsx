import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TreeShakeAndSafelist = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Performance/TreeShakeAndSafelist';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tree-Shake & Safelist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TreeShakeAndSafelist;
