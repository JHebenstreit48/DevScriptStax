import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TreeShakeAndSafelist = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Performance/TreeShakeAndSafelist';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tree-Shake & Safelist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TreeShakeAndSafelist;
